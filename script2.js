// bar right link
function barLink() {
    let cont = document.querySelector('.bar-in-click');
    let bar = document.getElementById('bar-icon');
    let xIcon = document.getElementById('x-icon');

    bar.addEventListener('click', () => {
        cont.classList.add('show');
    });

    xIcon.addEventListener('click', () => {
        cont.classList.remove('show');
    });

    document.addEventListener('click', (e) => {
        if (cont.classList.contains('show') && !cont.contains(e.target) && !bar.contains(e.target)) {
            cont.classList.remove('show');
        }
    });
}
barLink();
const imgElement = document.querySelector(".shap-image img");
const h1 = document.querySelector(".home-content h1");
const h4 = document.querySelector(".home-content h4");


const slides = [
    {
        title: "Chanel Chair High Quality Walnut",
        subtitle: "Chair collection 2022",
        image: "https://htmldemo.net/helendo/helendo/assets/images/hero/home-full-width-4.webp"
    },
    {
        title: "Flower Vase Made of Ceramic",
        subtitle: "Chair collection 2022",
        image: "https://htmldemo.net/helendo/helendo/assets/images/hero/home-full-width-1.webp"
    }
];

let currentSlide = 0;

function updateSlide(index) {
    h1.textContent = slides[index].title;
    h4.textContent = slides[index].subtitle;
    imgElement.src = slides[index].image;
}
// document.addEventListener("DOMContentLoaded", () => {
//     const rightArrow = document.querySelector(".arrow-icon-right");
//     const leftArrow = document.querySelector(".arrow-icon-left");

//     function arrowClick() {
//         rightArrow.addEventListener('click', () => {
//             currentSlide = (currentSlide + 1) % slides.length;
//             updateSlide(currentSlide);
//         });

//         leftArrow.addEventListener("click", () => {
//             currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//             updateSlide(currentSlide);
//         });
//     }

//     arrowClick();
// });

function shopDrobDone() {
    let shopDrob = document.querySelector(".shop-drowb");
    let drobDone = document.querySelector('.ul-shop');

    shopDrob.addEventListener('click', () => {
        drobDone.classList.toggle('show-shop');
    });
}
shopDrobDone();

