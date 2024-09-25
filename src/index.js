
document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)

  // 仅开发环境使用
  GSDevTools.create();

  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");
  const btn3 = document.querySelector("#btn3");
  const btn4 = document.querySelector("#btn4");

  const section1 = document.querySelector("#section1");
  const section2 = document.querySelector("#section2");
  const section3 = document.querySelector("#section3");
  const section4 = document.querySelector("#section4");


  const btnList = [
    btn1,
    btn2,
    btn3,
    btn4,
  ]

  const sectionList = [
    section1,
    section2,
    section3,
    section4,
  ]

  const switchSection = (tab) => {
    sectionList.forEach((section, index) => {
      if (index === tab - 1) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    })
  }

  const showAnime = (tab) => {
    switch (tab) {
      case 1:
        showAnime1()
        break;
      case 2:
        showAnime2()
        break;
      case 3:
        showAnime3()
        break;
      case 4:
        showAnime4()
        break;
      default:
        break;
    }
  }


  btnList.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      let tab = index + 1;
      switchSection(tab)
      setPageBgColor()
      setTimeout(() => {
        ScrollTrigger.getAll().forEach((trigger) => {
          trigger.kill();
        })
        // make animation
        showAnime(tab)
      }, 0)
    })
  })

  btnList[0].click();
});

