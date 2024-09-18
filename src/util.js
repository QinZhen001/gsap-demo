// -------------- public functions --------------

const setPageBgColor = () => {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page, index) => {
    page.style.backgroundColor = _getRandomHexColor();
  })
}



// -------------- private functions --------------

const _getRandomHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0;i < 6;i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
