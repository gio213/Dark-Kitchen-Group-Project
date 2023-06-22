// Giorgi
const shoppingBasket = document.querySelector("#basket");
const circle = document.querySelector(".circle");
const header = document.querySelector("header");
const foodContainer = document.querySelector(".foodContainer");
const search = document.querySelector(".input-field");
import meals from "./meals.json" assert { type: "json" };
// creating basket container
const cartProductsContainer = document.createElement("div");
cartProductsContainer.classList.add("cartProductsContainer");
header.appendChild(cartProductsContainer);
const listOl = document.createElement("ol");
cartProductsContainer.appendChild(listOl);
const total = document.createElement("button");
total.setAttribute("type", "button");
total.classList.add("totalBtn");

// theme change button
const themeSwitchBtn = document.getElementById("themeChanger");
const setTheme = (theme) => (document.documentElement.className = theme);
themeSwitchBtn.addEventListener("change", () => {
  if (themeSwitchBtn.checked) {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  if (!themeSwitchBtn.checked) {
    setTheme("light");
    localStorage.setItem("theme", "light");
  }
});
// retrieving theme from local storage
const currentTheme = localStorage.getItem("theme")
  ? localStorage.getItem("theme")
  : null;
if (currentTheme) {
  setTheme(currentTheme);
  if (currentTheme === "dark") {
    themeSwitchBtn.checked = true;
  }
}

let shoppingCart = [];
let totalPrice = 0;
// creating cards for each meal
const createCard = () => {
  for (let i = 0; i < meals.length; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    foodContainer.appendChild(card);
    const foodImgDiv = document.createElement("div");
    foodImgDiv.classList.add("foodImgDiv");
    card.appendChild(foodImgDiv);
    const foodImg = document.createElement("img");
    foodImg.classList.add("foodImg");
    foodImgDiv.appendChild(foodImg);
    const namePriceDiv = document.createElement("div");
    namePriceDiv.classList.add("namePriceDiv");
    card.appendChild(namePriceDiv);
    const nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    namePriceDiv.appendChild(nameDiv);
    const name = document.createElement("h1");
    nameDiv.appendChild(name);
    const priceDiv = document.createElement("div");
    priceDiv.classList.add("price");
    namePriceDiv.appendChild(priceDiv);
    const price = document.createElement("h1");
    priceDiv.appendChild(price);
    const tagDiv = document.createElement("div");
    tagDiv.classList.add("tags");
    card.appendChild(tagDiv);
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    card.appendChild(categoryDiv);
    const category = document.createElement("h1");
    categoryDiv.appendChild(category);
    category.textContent = ` Category: ${meals[i].category}`;
    const tag = document.createElement("p");
    tagDiv.appendChild(tag);
    const rating = document.createElement("div");
    rating.classList.add("rating");
    card.appendChild(rating);
    const star = document.createElement("i");
    star.classList.add("fa-regular", "fa-star");
    rating.appendChild(star);
    const star2 = document.createElement("i");
    star2.classList.add("fa-regular", "fa-star");
    rating.appendChild(star2);
    const star3 = document.createElement("i");
    star3.classList.add("fa-regular", "fa-star");
    rating.appendChild(star3);
    const star4 = document.createElement("i");
    star4.classList.add("fa-regular", "fa-star");
    rating.appendChild(star4);
    const star5 = document.createElement("i");
    star5.classList.add("fa-regular", "fa-star");
    const starDiv = document.createElement("div");
    starDiv.classList.add("starDiv");
    starDiv.appendChild(star);
    starDiv.appendChild(star2);
    starDiv.appendChild(star3);
    starDiv.appendChild(star4);
    starDiv.appendChild(star5);
    rating.appendChild(starDiv);
    const addTocardOmg = document.createElement("div");
    addTocardOmg.classList.add("addTocardOmg");
    rating.appendChild(addTocardOmg);
    const offerDiv = document.createElement("div");
    offerDiv.classList.add("offer");
    foodImgDiv.appendChild(offerDiv);
    const offer = document.createElement("h3");
    offerDiv.appendChild(offer);
    offer.textContent = `Offer: ${meals[i].offer}`;

    foodImg.src = meals[i].image;
    name.textContent = meals[i].name;
    price.textContent = `${meals[i].price} €`;
    tag.textContent = meals[i].tags;

    if (meals[i].rating === 1) {
      star.classList.add("fa-solid");
    } else if (meals[i].rating === 2) {
      star.classList.add("fa-solid");
      star2.classList.add("fa-solid");
    } else if (meals[i].rating === 3) {
      star.classList.add("fa-solid");
      star2.classList.add("fa-solid");
      star3.classList.add("fa-solid");
    } else if (meals[i].rating === 4) {
      star.classList.add("fa-solid");
      star2.classList.add("fa-solid");
      star3.classList.add("fa-solid");
      star4.classList.add("fa-solid");
    } else if (meals[i].rating === 5) {
      star.classList.add("fa-solid");
      star2.classList.add("fa-solid");
      star3.classList.add("fa-solid");
      star4.classList.add("fa-solid");
      star5.classList.add("fa-solid");
    }

    // adding to cart, total price, and cart array
    addTocardOmg.addEventListener("click", (e) => {
      if (e.target.classList.contains("addTocardOmg")) {
        shoppingCart.push(meals[i].name + " " + meals[i].price + " €");
        totalPrice += meals[i].price;
      }
      if (shoppingCart.length > 0) {
        circle.style.visibility = "visible";
        circle.textContent = shoppingCart.length;
      }
      const listLi = document.createElement("li");
      const liDiv = document.createElement("div");
      const removeImg = document.createElement("img");
      removeImg.classList.add("removeImg");
      removeImg.src = "./assets/icons8-remove-48.png";
      liDiv.classList.add("liDiv");
      const liDivTxt = document.createElement("p");
      cartProductsContainer.appendChild(total);
      liDiv.appendChild(liDivTxt);
      listLi.appendChild(liDiv);
      listOl.appendChild(listLi);
      liDivTxt.textContent = shoppingCart[shoppingCart.length - 1];
      liDiv.appendChild(removeImg);
      total.textContent = `Total: ${totalPrice.toFixed(2)} €`;
      removeImg.addEventListener("click", () => {
        liDiv.remove();
        totalPrice -= meals[i].price;
        total.textContent = `Total: ${totalPrice.toFixed(2)} €`;
        listOl.removeChild(listLi);
        shoppingCart.pop();
        circle.textContent = shoppingCart.length;
        if (shoppingCart.length === 0) {
          circle.style.visibility = "hidden";
          cartProductsContainer.removeChild(total);
        }
      });
    });
  }
};

createCard(meals);

shoppingBasket.addEventListener("click", () => {
  if (shoppingBasket.checked) {
    cartProductsContainer.style.visibility = "visible";
  }
  if (!shoppingBasket.checked) {
    cartProductsContainer.style.visibility = "hidden";
  }
});
// finish Giorgis part

// Other JavaScript code...

let filter = document.querySelector(".filterTitle");
let filterUl = document.querySelector(".filter-Ul");
let offers = document.querySelector(".offersTitle");
let offersUl = document.querySelector(".offers-Ul");
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
  if (isFilterUlActive) {
    filterUl.style = `display: none`;
    isFilterUlActive = false;
  } else {
    filterUl.style.display = "block";
    isFilterUlActive = true;
  }
});

offers.addEventListener("click", (event) => {
  event.preventDefault();
  if (isOffersUlActive) {
    offersUl.style = `display: none`;
    isOffersUlActive = false;
  } else {
    offersUl.style.display = "block";
    isOffersUlActive = true;
  }
});

tickets.addEventListener("click", (event) => {
  event.preventDefault();
  if (isTicketsUlActive) {
    ticketsUl.style = `display: none`;
    isTicketsUlActive = false;
  } else {
    ticketsUl.style.display = "block";
    isTicketsUlActive = true;
  }
});

diet.addEventListener("click", (event) => {
  event.preventDefault();
  if (isDietUlActive) {
    dietUl.style = `display: none`;
    isDietUlActive = false;
  } else {
    dietUl.style.display = "block";
    isDietUlActive = true;
  }
});

categories.addEventListener("click", (event) => {
  event.preventDefault();
  if (isCategoriesUlActive) {
    categoriesUl.style = `display: none`;
    isCategoriesUlActive = false;
  } else {
    categoriesUl.style.display = "block";
    isCategoriesUlActive = true;
  }
});

//////////footer ///////////
//contact Form
let form = document.getElementsByClassName("contact")[0];
form.style.cursor = "pointer";

const openForm = () => {
  // Create popup
  const popup = window.open("_blank");

  // Fill the popup
  const formContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="popup-style.css">
    </head>
    <body>
    <div>
    <div class="logo"></div>
    <h1 id="form-title">Contact Form</h1>
    </div>
      <form class="contact-form" action="/submit"  method="POST">
      <div class="form-group">
        <label for="name" value="name">Name:</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" required>
      </div>
      <div class="form-group">
        <label id="message-label" for="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>

    </body>
    </html>
    `;

  popup.document.open();
  popup.document.write(formContent);
  popup.document.close();
};
form.addEventListener("click", openForm);

// About us
let aboutUs = document.getElementsByClassName("aboutUs")[0];
aboutUs.style.cursor = "pointer";
const openaboutUs = () => {
  // Create popup
  const popup = window.open("_blank");

  // Fill the popup
  const recipeContent = `
      <style>
      </style>
      <section class="about-section">
      <h1>About Us</h1>
      <p>Welcome to our Dark Kitchen! We are a team of passionate chefs who strive to deliver delicious and unique dishes right to your doorstep. With our carefully crafted recipes and high-quality ingredients, we aim to provide an exceptional dining experience in the comfort of your own home.<br>
      At our Dark Kitchen, we focus on creating innovative and mouthwatering dishes that cater to various dietary preferences. Whether you're a meat lover, a vegetarian, or follow a specific diet, we have a wide range of options to satisfy your cravings.<br>
      Our dedicated team of chefs and staff work tirelessly to ensure that every order is prepared with utmost care and attention to detail. We value customer satisfaction and aim to exceed your expectations with every meal.<br>
      Thank you for choosing our Dark Kitchen. We look forward to serving you and creating memorable dining experiences.</p>
  </section>
    `;

  popup.document.open();
  popup.document.write(recipeContent);
  popup.document.close();
};
aboutUs.addEventListener("click", openaboutUs);

//Research bar algo
search.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase().replace(/\s/g, "");

  for (let card of foodContainer.children) {
    const name = card
      .querySelector(".name h1")
      .textContent.toLowerCase()
      .replace(/\s/g, "");

    if (name.includes(searchString)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  }
});

//checkbox category eventlisner
let checkCategory = (checkbox, categ) => {
  for (let card of foodContainer.children) {
    const tags = card.querySelector(".tags");
    for (let tag of tags.children) {
      if (checkbox.children[0].checked == true) {
        if (tag.textContent.includes(categ)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      } else {
        card.style.display = "block";
      }
    }
  }
};

let categoriesLi = document.querySelector(".categories-Ul");
for (let i of categoriesLi.children) {
  i.id = i.textContent;
  let country = document.getElementById(i.id);
  country.addEventListener("click", () => checkCategory(i, i.id));
}
//checkbox diets eventlisner

let dietLi = document.querySelector(".diet-Ul");
for (let i of dietLi.children) {
  i.id = i.textContent;
  let country = document.getElementById(i.id);
  country.addEventListener("click", () => checkCategory(i, i.id));
}
