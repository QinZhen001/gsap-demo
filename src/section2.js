// Basic Pin https://codepen.io/GreenSock/pen/YzXdbQo

const showAnime2 = () => {
  const height = document.querySelector("#page-2-1").offsetHeight;
  console.log("[showAnime2] height", height);

  ScrollTrigger.create({
    trigger: "#page-2-1",
    start: "top top",
    end: () => "+=" + height,
    // pin 用于在滚动过程中固定一个元素。固定元素在滚动过程中保持在一个固定位置，直到滚动到特定位置或滚动区域结束。
    // pin 选项在创建复杂的滚动动画和滚动驱动的交互中非常有用。
    pin: true,
    pinSpacing: false,
    marks: true,
  });


}
