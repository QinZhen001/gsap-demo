
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // just for test
  GSDevTools.create();

  const tl = gsap.timeline();

  tl.to("#a", { duration: 1, x: 100 })
    .to("#a", { duration: 1, y: 100 })
    .to("#a", { duration: 1, x: 0 })
    .to("#a", { duration: 1, y: 0 });

  // gsap.to("#a", {
  //   scrollTrigger: {
  //     trigger: "#a",
  //     start: "top center",
  //     end: "bottom center",
  //     scrub: true,
  //     markers: true,
  //   },
  //   x: 400,
  //   duration: 2,
  // })

});
