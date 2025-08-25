const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');
const page = document.querySelector('.page');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    page.classList.toggle('shifted');
    hamburger.classList.toggle('active');
})