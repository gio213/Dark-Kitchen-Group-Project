let filter = document.querySelector(".filterTitle");
let filterUl = document.querySelector(".filter-Ul");
let offers = document.querySelector(".offersTitle");
let offersUl = document.querySelector(".offers-Ul")
let tickets = document.querySelector(".ticketsTitle");
let ticketsUl = document.querySelector(".tickets-Ul");
let diet = document.querySelector(".dietTitle");
let dietUl = document.querySelector(".diet-Ul");
let categories = document.querySelector(".categoriesTitle");
let categoriesUl = document.querySelector(".categories-Ul");
let isFilterUlActive = true;
let isOffersUlActive = true;
let isTicketsUlActive = true;
let isDietUlActive = true;
let isCategoriesUlActive = true;



filter.addEventListener("click", (event) => {
    event.preventDefault();
    if(isFilterUlActive) {
        filterUl.style = `display: none`;
        isFilterUlActive = false;
    } else {
        filterUl.style.display = "block";
        isFilterUlActive = true;
    }
    
})

offers.addEventListener("click", (event) => {
    event.preventDefault();
    if(isOffersUlActive) {
        offersUl.style = `display: none`;
        isOffersUlActive = false;
    } else {
        offersUl.style.display = "block";
        isOffersUlActive = true;
    }
})


tickets.addEventListener("click", (event) => {
    event.preventDefault();
    if(isTicketsUlActive) {
        ticketsUl.style = `display: none`;
        isTicketsUlActive = false;
    } else {
        ticketsUl.style.display = "block";
        isTicketsUlActive = true;
    }
})

diet.addEventListener("click", (event) => {
    event.preventDefault();
    if(isDietUlActive) {
        dietUl.style = `display: none`;
        isDietUlActive = false;
    } else {
        dietUl.style.display = "block";
        isDietUlActive = true;
    }
})

categories.addEventListener("click", (event) => {
    event.preventDefault();
    if(isCategoriesUlActive) {
        categoriesUl.style = `display: none`;
        isCategoriesUlActive = false;
    } else {
        categoriesUl.style.display = "block";
        isCategoriesUlActive = true;
    }
})