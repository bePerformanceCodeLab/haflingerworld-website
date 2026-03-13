/// <reference types="astro/client" />

declare module 'lenis' {
  export default class Lenis {
    constructor(options?: {
      duration?: number;
      easing?: (t: number) => number;
      touchMultiplier?: number;
      smoothWheel?: boolean;
      syncTouch?: boolean;
    });
    raf(time: number): void;
    scrollTo(target: HTMLElement | number | string, options?: { offset?: number; immediate?: boolean }): void;
    destroy(): void;
    stop(): void;
    start(): void;
  }
}
