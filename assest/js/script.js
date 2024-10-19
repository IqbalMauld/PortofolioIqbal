document.addEventListener("DOMContentLoaded", function() {
  const extra = document.querySelector(".extra");

  extra.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navLogo = document.querySelectorAll(".nav-logo");

  navLogo.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "power2.out"
      });
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".nav a");

  navItems.forEach((item, index) => {
      gsap.to(item, {
          opacity: 1,
          x: 0,
          duration: 1.5,
          delay: index * 0.8, // Stagger the animation
          ease: "power2.out"
      });
  });
});
gsap.registerPlugin(TextPlugin);
    
gsap.to('.text', {duration: 1.5, delay: 2, text: 'Web Developer'});
// gsap.from('header', {duration: 1.5, y: -100, opacity: 0, ease: 'bounce'}); 
gsap.from('.left', {duration: 1.5, delay: 1, x: -100, opacity: 0});
gsap.from('.right', {duration: 1.5, delay: 1, x: 100, opacity: 0});
gsap.from('.about', {duration: 1.5, delay: 1, x: 100, opacity: 0});

const nav = document.querySelector('.nav');
const menu = document.querySelector('.extra');
menu.addEventListener('click', () =>{
    nav.classList.toggle('active');

});

document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !nav.contains(e.target)){
        nav.classList.remove('active');
    }
});

const scriptURL = 'https://script.google.com/a/macros/manplo.com/s/AKfycbwWbmyKQw0uAuPimuYZlVJKSBseocdPF7KmzpR0dal5cFL84QTpWDrKbGplbV0fZJOV/exec';
const form1 = document.forms['datacontact1'];
const form2 = document.forms['datacontact2'];

form1.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form1) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});

form2.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form2) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});
