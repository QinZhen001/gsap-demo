// section1  
// 基础 case 展示

const showAnime1 = () => {
  gsap.to("#page-1-2-a", {
    scrollTrigger: {
      trigger: "#page-1-2-a",
      //  第一个值是触发元素的位置（绿start线），第二个值是视口的位置（绿scroller-start线）。
      // 打个
      start: "20px 80%",
      // start: "top center",
      // end: "+=300",
      // ScrollTrigger 插件中，scrub 属性用于将滚动位置与动画的播放进度同步。
      // 具体来说，scrub 属性可以使动画在滚动页面时逐帧播放，滚动的速度和动画的播放速度保持同步
      // 这样，动画的进度与滚动条的位置紧密关联，提供一种流畅的滚动动画效果。
      scrub: true,
      // 是否显示标记 （仅用于开发环境）
      markers: true,
      // 动画的不同滚动状态设置不同的行为
      // 触发器进入视口时播放动画，离开视口时暂停动画，触发器从下方进入视口时继续播放动画，触发器从下方离开视口时重置动画
      toggleActions: "play pause resume reset",
    },
    x: 400,
    duration: 8,
  })



  gsap.to("#page-1-3-a", {
    rotation: 360,
    x: 200,
    scrollTrigger: {
      trigger: "#page-1-3-a",
      start: "center center",
      // end 属性用于定义滚动触发器的结束位置
      end: () => "+=" + document.querySelector("#page-1-3-a").offsetHeight,
      // end: "+=30" 的作用是定义滚动触发器的结束位置相对于触发器的起始位置向下（或向右）移动 30 像素。
      // end: "+=30",
      toggleActions: "restart pause reverse pause",
      scrub: true,
      markers: true,
    }
  });

}



