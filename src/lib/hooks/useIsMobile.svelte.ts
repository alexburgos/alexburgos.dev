const DEFAULT_BREAKPOINT = 768; // matches Tailwind `md`

/**
 * Reactive viewport-width check. Returns an object whose `.current` flips
 * between true/false as the viewport crosses the breakpoint (default 768px).
 *
 * Must be called from a Svelte component or another `.svelte.ts` module —
 * relies on `$state` / `$effect`.
 */
export function useIsMobile(breakpoint: number = DEFAULT_BREAKPOINT) {
  let isMobile = $state(false);

  $effect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = (): void => {
      isMobile = mql.matches;
    };
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  });

  return {
    get current() {
      return isMobile;
    }
  };
}
