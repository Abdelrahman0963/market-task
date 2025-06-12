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
document.addEventListener("DOMContentLoaded", () => {
    const angle = document.getElementById('angle-scrole');
    if (angle) {
        angle.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }
});
const ProductDemos = [
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/h1.jpg",
        title: "Home Default",
        link: "http://127.0.0.1:5500/index2.html",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/h2.jpg",
        title: "Home Minimal",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h3.jpg",
        title: "Home Metro",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h4.jpg",
        title: "Home Left Sidebar",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h5.jpg",
        title: "Home Full Width",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h7.jpg",
        title: "Home Parallax",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h7.jpg",
        title: "Home Boxed",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h8.jpg",
        title: "Home Collection",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h11.jpg",
        title: "Home Categories",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h12.jpg",
        title: "Home Video Features",
        link: "http://127.0.0.1:5500/index2.html",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/h9.jpg",
        title: "Home Features v2 ( New )",
        link: "http://127.0.0.1:5500/index2.html",
    },
]
function displayProductDemos() {
    const Demos = document.querySelector('.pre-cards');

    ProductDemos.forEach(item => {
        Demos.innerHTML += `
            <div class="pre-card">
                <a href="${item.link}">
                    <img src="${item.image}" loading="lazy" alt="${item.title}" />
                    <span>${item.title}</span>
                </a>
            </div>
        `;
    });
}
displayProductDemos()

const productShop = [
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/c1.jpg",
        title: "Shop 3 Column",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/c2.jpg",
        title: "Shop 4 Column",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/c3.jpg",
        title: "Shop 5 Column",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/c4.jpg",
        title: "Shop 6 Column",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/c5.jpg",
        title: "Shop Categories",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/c6.jpg",
        title: "Shop Left Sidebar",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/c9.jpg",
        title: "Shop Carousel",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/c10.jpg",
        title: "Shop With Boder",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/c11.jpg",
        title: "Shop Without Gutter",
    }
]
function displayProductShop() {
    const Shop = document.querySelector('.shop-cards');

    productShop.forEach(item => {
        Shop.innerHTML += `
            <div class="shop-card">
                <a href="#">
                    <img src="${item.image}" loading="lazy" alt="${item.title}" />
                    <span>${item.title}</span>
                </a>
            </div>
        `;
    });
}
displayProductShop()

const productProduct = [
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s1.jpg",
        title: "Product Default",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s13.jpg",
        title: "Product Default Two",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s2.jpg",
        title: "Product Simple",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s3.jpg",
        title: "Product Variable",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s4.jpg",
        title: "product groupped",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s5.jpg",
        title: "product image swatches",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s6.jpg",
        title: "product countdown timer",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s8.jpg",
        title: "product video featured",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/s9.jpg",
        title: "product affiliate",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s11.jpg",
        title: "product on sale",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/s12.jpg",
        title: "product out of stock",
    }
]
function displayProductProduct() {
    const Product = document.querySelector('.product-cards');

    productProduct.forEach(item => {
        Product.innerHTML += `
            <div class="product-card">
                <a href="#">
                    <img src="${item.image}" loading="lazy" alt="${item.title}" />
                    <span>${item.title}</span>
                </a>
            </div>
        `;
    });
}
displayProductProduct()
const productBlog = [
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/b1.jpg",
        title: "Blog Grid",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/b2.jpg",
        title: "Blog Listing",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/b3.jpg",
        title: "Blog Masonry",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/b4.jpg",
        title: "News With Sidebar",
    }, {
        image: "https://htmldemo.net/helendo/assets/images/preview/b5.jpg",
        title: "Blog Single Post V1",
    },
    {
        image: "https://htmldemo.net/helendo/assets/images/preview/b6.jpg",
        title: "Blog Single Post V2",
    }
]
function displayProductBlog() {
    const Blog = document.querySelector('.blog-cards');
    productBlog.forEach(item => {
        Blog.innerHTML += `
            <div class="blog-card">
                <a href="#">
                    <img src="${item.image}" loading="lazy" alt="${item.title}" />
                    <span>${item.title}</span>
                </a>
            </div>
        `;
    })
}
displayProductBlog() 