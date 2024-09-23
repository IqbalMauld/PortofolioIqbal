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
