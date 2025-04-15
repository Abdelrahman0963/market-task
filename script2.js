let cont = document.querySelector('.bar-in-click');
let bar = document.getElementById('bar-icon');
let xIcon = document.getElementById('x-icon');

bar.addEventListener('click', () => {
    cont.classList.add('show');
});

xIcon.addEventListener('click', () => {
    cont.classList.remove('show');
});
