const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');
const o = document.querySelector('.o');
menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
  o.classList.toggle('active');
})

