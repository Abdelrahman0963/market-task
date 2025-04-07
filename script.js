// Navbar border
window.addEventListener('scroll', () => {
    const sd = document.getElementById('scroll-demos');
    const ss = document.getElementById('scroll-Shop');
    const sp = document.getElementById('scroll-Product');
    const sb = document.getElementById('scroll-Blog');
    if (window.pageYOffset < 2854) {
        sd.classList.add("bord");
    } else {
        sd.classList.remove("bord");
    }
    if (window.pageYOffset >= 2855 && window.pageYOffset <= 3480) {
        ss.classList.add("bord");
    } else {
        ss.classList.remove("bord");
    }
    if (window.pageYOffset > 3481 && window.pageYOffset <= 5000) {
        sp.classList.add("bord");
    } else {
        sp.classList.remove("bord");
    }
    if (window.pageYOffset > 5000 && window.pageYOffset <= 10000) {
        sb.classList.add("bord");
    } else {
        sb.classList.remove("bord");
    }
});
//scroll icon animation
window.addEventListener('scroll', () => {
    const si = document.querySelector('.scroll-icon')
    const sib = document.querySelector('.ic-sc')
    if (window.pageYOffset >= 900 && window.pageYOffset <= 100000) {
        si.classList.add('ic-sc');
    } else {
        si.classList.remove('ic-sc');
    }
    si.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
})
// header animation
window.addEventListener("scroll", () => {

    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
// scroll icon in demos
function angle() {
    const angle = document.getElementById('angle-scrole');
    angle.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
angle();
console.log(pageYOffset);
