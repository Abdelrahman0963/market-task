let currentCategory = "All products";

const ProductItems = [
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_1-300x300.webp`,
        title: "Teapot with black tea",
        outOfStock: true,
        sale: false,
        newPrice: "£40.00",
        oldPrice: "-£63.00",
        category: "Accessories",
        sumCategory: "Decoration"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_2-300x300.webp`,
        title: "Simple chair",
        outOfStock: false,
        sale: false,
        newPrice: "£70.00",
        oldPrice: "-£95.00",
        category: "chair",
        sumCategory: "Furniture"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_3-300x300.webp`,
        title: "Smooth Disk",
        outOfStock: false,
        sale: false,
        newPrice: "£46.00",
        category: "Furniture",
        sumCategory: "Accessories"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_4-300x300.webp`,
        title: "Wooden Flowerpot",
        outOfStock: false,
        sale: true,
        newPrice: "£40.00",
        oldPrice: "-£63.00",
        category: "Accessories",
        sumCategory: "Furniture"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_5-300x300.webp`,
        title: "Living room & Bedroom lights",
        outOfStock: false,
        sale: false,
        newPrice: "£60.00",
        oldPrice: "-£80.00",
        category: "Decoration",
        sumCategory: "Accessories"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_6-300x300.webp`,
        title: "Gray Lamp",
        outOfStock: false,
        sale: false,
        newPrice: "£80.00",
        category: "Accessories",
        sumCategory: "Furniture"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_7-300x300.webp`,
        title: "Decoration Wood",
        outOfStock: false,
        sale: false,
        newPrice: "£50.00",
        category: "Decoration",
        sumCategory: "Accessories"
    },
    {
        img: `https://htmldemo.net/helendo/helendo/assets/images/product/1_8-300x300.webp`,
        title: "Teapot with black tea",
        outOfStock: false,
        sale: false,
        newPrice: "£20.00",
        oldPrice: "-£50.00",
        category: "Table",
        sumCategory: "Decoration"
    }
];

function displayProducts(products) {
    const container = document.querySelector(".shop-items-pageTow");
    container.innerHTML = "";

    products.forEach((item) => {
        container.innerHTML += `
        <div class="item-card-pageTow">
            <div class="item-image-pageTow ${item.outOfStock ? "out-of-stock" : ""} ${!item.outOfStock && item.sale ? "sale-14" : ""}">
                <img src="${item.img}" alt="${item.title}" />
                <div class="icons-pageTow">
                    <a href="#"><i class="fa-regular fa-heart"></i></a>
                    <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                    <a href="#"><i class="fa-solid fa-eye"></i></a>
                </div>
            </div>
            <div class="item-content-pageTow" data-category="${item.category} ${item.sumCategory}">
                <a href="#">${item.title}</a>
                <div class="price-pageTow">
                    <span class="new-price">${item.newPrice}</span>
                    <span class="old-price">${item.oldPrice ? item.oldPrice : ""}</span>
                </div>
            </div>
        </div>`;
    });
    if (products.length < 4) {
        const btnScroll = document.querySelector(".shop-Items-Btn");
        btnScroll.style.display = "none";
    } else {
        const btnScroll = document.querySelector(".shop-Items-Btn");
        btnScroll.style.display = "flex";
    }
}
displayProducts(ProductItems);

function navCategory() {
    let categories = [];
    const categoryItem = document.querySelectorAll(".navPar-pageTow");

    ProductItems.forEach((item) => {
        if (item.category) {
            categories.push(item.category);
        }
    });

    const uniqueCategories = ["All products", ...new Set(categories)];
    const results = uniqueCategories.map((category) => ({
        label: category,
        value: category
    }));

    results.forEach((item, index) => {
        categoryItem.forEach((el) => {
            el.innerHTML += `
                <h3 class="${index === 0 ? "active-linkTow" : ""}" data-value="${item.value}">
                    ${item.label}
                </h3>
                <span>|</span>`;
        });
    });

    const btnCategory = document.querySelectorAll(".navPar-pageTow h3");
    btnCategory.forEach((item) => item.onclick = () => {
        btnCategory.forEach((el) => el.classList.remove("active-linkTow"));
        item.classList.add("active-linkTow");
        currentCategory = item.dataset.value;
        productFilter();
    });
}
navCategory();

function productFilter() {
    let filteredProducts;

    if (currentCategory === "All products") {
        filteredProducts = ProductItems;
    } else {
        filteredProducts = ProductItems.filter((item) => item.category === currentCategory);
    }

    displayProducts(filteredProducts);
}

const btnXLeft = document.querySelector(".btn-left");
const btnXRight = document.querySelector(".btn-right");

btnXLeft.addEventListener("click", () => {
    const shopScroll = document.querySelector(".shop-items-pageTow");
    shopScroll.scrollLeft -= 300;
});

btnXRight.addEventListener("click", () => {
    const shopScroll = document.querySelector(".shop-items-pageTow");
    shopScroll.scrollLeft += 300;
});
