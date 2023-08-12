import gsap from "gsap";
import * as ScrollToPlugin from "gsap/ScrollToPlugin";

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollToPlugin);

  return {
    provide: { gsap },
  };
});
