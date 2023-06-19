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
let isFilterUlActive = false;

// let addEventsCLick = (event) => {
    
// }


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
    if(isFilterUlActive) {
        offersUl.style = `display: none`;
        isFilterUlActive = false;
    } else {
        offersUl.style.display = "block";
        isFilterUlActive = true;
    }
})


tickets.addEventListener("click", (event) => {
    event.preventDefault();
    if(isFilterUlActive) {
        ticketsUl.style = `display: none`;
        isFilterUlActive = false;
    } else {
        ticketsUl.style.display = "block";
        isFilterUlActive = true;
    }
})

diet.addEventListener("click", (event) => {
    event.preventDefault();
    if(isFilterUlActive) {
        dietUl.style = `display: none`;
        isFilterUlActive = false;
    } else {
        dietUl.style.display = "block";
        isFilterUlActive = true;
    }
})

categories.addEventListener("click", (event) => {
    event.preventDefault();
    if(isFilterUlActive) {
        categoriesUl.style = `display: none`;
        isFilterUlActive = false;
    } else {
        categoriesUl.style.display = "block";
        isFilterUlActive = true;
    }
})