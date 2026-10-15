import { useEffect, useLayoutEffect } from 'react';

// Below this the type is unreadable and a scroll is the lesser evil. Only a
// phone held sideways gets anywhere near it.
const MIN_ZOOM = 0.4;

// Keeps a card on screen with no page scroll: if the page is taller than the
// viewport, the card is zoomed down until it is not. `zoom` rather than a
// transform because zoom shrinks the layout box too -- a scaled transform
// leaves the page as tall as before, and the scrollbar with it.
//
// It measures the page rather than guessing at the padding around the card:
// how much room is left differs by screen size, and by whether the dev bar is
// there. Re-measured after every render (the language changes the copy) and on
// resize, always from zoom 1 so the answer never compounds.
export function useFitToViewport(ref) {
  function fit() {
    const el = ref.current;
    if (!el) return;
    el.style.zoom = '';
    let zoom = 1;
    // Zoom is linear in height, so one correction lands it; the second mops up
    // rounding and any copy that re-wraps at the new size.
    for (let pass = 0; pass < 3; pass += 1) {
      const over = document.documentElement.scrollHeight - window.innerHeight;
      if (over <= 0 || zoom <= MIN_ZOOM) break;
      const h = el.getBoundingClientRect().height;
      zoom = Math.max(MIN_ZOOM, zoom * Math.max(0, h - Math.ceil(over) - 1) / h);
      el.style.zoom = String(zoom);
    }
  }

  useLayoutEffect(fit);

  useEffect(() => {
    window.addEventListener('resize', fit);
    document.fonts?.ready.then(fit);
    return () => window.removeEventListener('resize', fit);
  });
}
