const btn = document.querySelector('.btn');
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
btn.addEventListener('click', () => {
  window.alert(`Размеры эрана: (${screen.width}х${screen.height})`);
});
