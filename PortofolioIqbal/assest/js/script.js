const nav = document.querySelector('.nav');
const menu = document.getElementById('menu');

menu.addEventListener('click', () =>{
    nav.classList.toggle('active');
});