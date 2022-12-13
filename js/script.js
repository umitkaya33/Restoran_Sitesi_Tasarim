//! search function 
const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#btnSearch");
searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle("active");
    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(searchBtn) && !e.composedPath().includes(searchForm)) {
            searchForm.classList.remove("active");
        }
    })
});
//! shopping cart function
const shoppingForm = document.querySelector(".cart-items-container");
const shoppingBtn = document.querySelector("#btnShopping");
shoppingBtn.addEventListener('click', function () {
    shoppingForm.classList.toggle("active");
    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(shoppingBtn) && !e.composedPath().includes(shoppingForm)) {
            shoppingForm.classList.remove("active");
        }
    })
});
//! navbar  function
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener('click', function () {
    navbar.classList.toggle("active");
    document.addEventListener('click', function (e) {
        if (!e.composedPath().includes(navbar) && !e.composedPath().includes(menuBtn)) {
            navbar.classList.remove("active");
        }
    })
});