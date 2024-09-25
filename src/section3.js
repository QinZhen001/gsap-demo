// https://greensock.com/docs/v3/Plugins/ScrollTrigger/static.batch()
// Creates a coordinated group of ScrollTriggers

const showAnime3 = () => {
  ScrollTrigger.batch(".card", {
    // time window (in seconds) for batching to occur. 
    // 收集每个批次的最大时间量(以秒为单位)。一旦某种类型的回调被调用,计时器就会开始,然后当计时器耗尽或达到批次最大值时(以先到者为准),批次就会完成。
    // interval: 0.1,
    // maximum batch size (targets)
    batchMax: 3,
    onEnter: batch => gsap.to(batch,
      {
        // https://gsap.com/docs/v3/GSAP/CorePlugins/CSS/#autoalpha
        // autoAlpha 是一个结合了 opacity 和 visibility 的属性
        // 透明度控制：autoAlpha 的值可以在 0 到 1 之间，控制元素的透明度。0 表示完全透明，1 表示完全不透明。
        // 可见性控制：当 autoAlpha 的值为 0 时，元素的 visibility 属性会被设置为 hidden，元素会被完全隐藏且不占据布局空间。值大于 0 时，visibility 属性会被设置为 visible。
        autoAlpha: 1,
        // https://gsap.com/resources/getting-started/Staggers/
        // 0.1 seconds between when each element starts animating
        // 每个动画的开始之间添加一些延迟
        stagger: 0.1
      }),
    // also onLeave, onEnterBack, and onLeaveBack
    // also most normal ScrollTrigger values like start, end, etc.
  });

}

