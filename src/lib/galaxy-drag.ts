/**
 * Press-and-hold dragging for the planets on the home map.
 *
 * - A drag starts only after holding still: ~160 ms with a mouse (or sooner, the
 *   moment the mouse moves while pressed), ~280 ms on touch. A finger that moves
 *   more than 8 px before that is scrolling the page, and is left alone.
 * - A planet moves only inside its own belt (the area band it belongs to).
 * - Motion is eased towards the pointer every frame; `onMove` lets the caller
 *   redraw the connecting lines in the same frame.
 * - A drag swallows the click that follows it, so letting go never opens the
 *   category by accident. Arrow keys move a focused planet too.
 * - Positions are not saved: a resize puts every planet back on its default spot.
 *
 * The default spots come from CSS layout; this only adds a translate offset on
 * top, so without JavaScript the map is still a complete, ordered set of links.
 */

interface Offset {
  x: number;
  y: number;
}

const HOLD_MOUSE = 160;
const HOLD_TOUCH = 280;
const SLOP = 8;
const KEY_STEP = 16;

export function initGalaxyDrag(root: HTMLElement, onMove: () => void): void {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const current = new Map<HTMLElement, Offset>();
  const target = new Map<HTMLElement, Offset>();
  let frame = 0;

  const offsetOf = (map: Map<HTMLElement, Offset>, node: HTMLElement) => map.get(node) ?? { x: 0, y: 0 };

  const apply = (node: HTMLElement, offset: Offset) => {
    current.set(node, offset);
    node.style.translate = offset.x || offset.y ? `${offset.x}px ${offset.y}px` : "";
  };

  /** The offsets that keep a planet's box inside its belt's field. */
  const bounds = (node: HTMLElement) => {
    const field = node.closest<HTMLElement>("[data-field]")!.getBoundingClientRect();
    const box = node.getBoundingClientRect();
    const now = offsetOf(current, node);
    const baseLeft = box.left - now.x;
    const baseTop = box.top - now.y;
    return {
      minX: field.left - baseLeft,
      maxX: field.right - (baseLeft + box.width),
      minY: field.top - baseTop,
      maxY: field.bottom - (baseTop + box.height),
    };
  };

  const clamp = (node: HTMLElement, offset: Offset): Offset => {
    const b = bounds(node);
    return {
      x: Math.min(Math.max(offset.x, b.minX), b.maxX),
      y: Math.min(Math.max(offset.y, b.minY), b.maxY),
    };
  };

  // One loop eases every moving planet towards its target, then stops itself.
  const tick = () => {
    frame = 0;
    let moving = false;
    for (const [node, goal] of target) {
      const now = offsetOf(current, node);
      const ease = reduceMotion.matches ? 1 : 0.28;
      const next = { x: now.x + (goal.x - now.x) * ease, y: now.y + (goal.y - now.y) * ease };
      const settled = Math.abs(goal.x - next.x) < 0.3 && Math.abs(goal.y - next.y) < 0.3;
      apply(node, settled ? goal : next);
      if (settled) target.delete(node);
      else moving = true;
    }
    onMove();
    if (moving) frame = requestAnimationFrame(tick);
  };

  const moveTo = (node: HTMLElement, offset: Offset) => {
    target.set(node, clamp(node, offset));
    if (!frame) frame = requestAnimationFrame(tick);
  };

  let active: {
    node: HTMLElement;
    pointerId: number;
    startX: number;
    startY: number;
    from: Offset;
    dragging: boolean;
    timer: number;
  } | null = null;
  let swallowClick: HTMLElement | null = null;

  const begin = () => {
    if (!active) return;
    active.dragging = true;
    active.from = offsetOf(current, active.node);
    active.node.classList.add("is-dragging");
    root.classList.add("is-dragging");
    try {
      active.node.setPointerCapture(active.pointerId);
    } catch {
      // The pointer may already be gone; the move handlers still work.
    }
    navigator.vibrate?.(10);
  };

  const end = () => {
    if (!active) return;
    window.clearTimeout(active.timer);
    if (active.dragging) {
      active.node.classList.remove("is-dragging");
      root.classList.remove("is-dragging");
      swallowClick = active.node;
      // If no click follows (touch often sends none), stop swallowing.
      window.setTimeout(() => (swallowClick = null), 400);
    }
    active = null;
  };

  root.addEventListener("pointerdown", (event) => {
    const node = (event.target as Element).closest<HTMLElement>("[data-node]");
    if (!node || !root.contains(node) || event.button !== 0) return;
    const hold = event.pointerType === "mouse" ? HOLD_MOUSE : HOLD_TOUCH;
    active = {
      node,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      from: offsetOf(current, node),
      dragging: false,
      timer: window.setTimeout(begin, hold),
    };
  });

  root.addEventListener("pointermove", (event) => {
    if (!active || event.pointerId !== active.pointerId) return;
    const dx = event.clientX - active.startX;
    const dy = event.clientY - active.startY;

    if (!active.dragging) {
      if (Math.hypot(dx, dy) <= SLOP) return;
      // A mouse that moves while pressed means "drag now"; a finger that moves
      // before the hold completes means "scroll".
      if (event.pointerType === "mouse") begin();
      else return end();
    }
    moveTo(active.node, { x: active.from.x + dx, y: active.from.y + dy });
  });

  root.addEventListener("pointerup", end);
  root.addEventListener("pointercancel", end);
  root.addEventListener("lostpointercapture", end);

  // Touch: once a hold has turned into a drag, the page must not scroll.
  root.addEventListener(
    "touchmove",
    (event) => {
      if (active?.dragging) event.preventDefault();
    },
    { passive: false },
  );

  // A long press would otherwise open the link preview / context menu.
  root.addEventListener("contextmenu", (event) => {
    if ((event.target as Element).closest("[data-node]")) event.preventDefault();
  });

  root.addEventListener(
    "click",
    (event) => {
      const node = (event.target as Element).closest<HTMLElement>("[data-node]");
      if (node && node === swallowClick) {
        event.preventDefault();
        event.stopPropagation();
        swallowClick = null;
      }
    },
    true,
  );

  root.addEventListener("keydown", (event) => {
    const node = (event.target as Element).closest<HTMLElement>("[data-node]");
    if (!node) return;
    const step = {
      ArrowLeft: { x: -KEY_STEP, y: 0 },
      ArrowRight: { x: KEY_STEP, y: 0 },
      ArrowUp: { x: 0, y: -KEY_STEP },
      ArrowDown: { x: 0, y: KEY_STEP },
    }[event.key];
    if (!step) return;
    event.preventDefault();
    const from = offsetOf(target, node).x || offsetOf(target, node).y ? offsetOf(target, node) : offsetOf(current, node);
    moveTo(node, { x: from.x + step.x, y: from.y + step.y });
  });

  // Layout changed: every planet goes home, the lines follow.
  let lastWidth = root.clientWidth;
  new ResizeObserver(() => {
    if (root.clientWidth !== lastWidth) {
      lastWidth = root.clientWidth;
      target.clear();
      for (const node of current.keys()) apply(node, { x: 0, y: 0 });
    }
    onMove();
  }).observe(root);
}
