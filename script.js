
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

const http = require('http');
const fs = require('./meals.json');

const hostname = '127.0.0.1';
const port = 3000;
const filePath = 'path/to/file.json';

const server = http.createServer((req, res) => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Error reading JSON file');
      console.error(error);
      return;
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



//////////footer ///////////
//contact Form
let form = document.getElementsByClassName("contact")[0];
form.style.cursor = "pointer";

const openForm= () =>{
 
    // Create popup
    const popup = window.open( "_blank");
 
  
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
    <div "class=logo"></div>
    <h1>Contact Form</h1>
    </div>
      <form class="contact-form"  method="POST">

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
        <label for="message">Message:</label>
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
  }
form.addEventListener("click", openForm);


// About us
let aboutUs =document.getElementsByClassName("aboutUs")[0];
aboutUs.style.cursor = "pointer";
const openaboutUs= () =>{
    // Create popup
    const popup = window.open( "_blank");
  
    // Fill the popup
    const desc = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="popup-style.css">
    </head>
    <body>
      <section class="about-section">
      <h1>About Us</h1>
      <p>Welcome to our Dark Kitchen! We are a team of passionate chefs who strive to deliver delicious and unique dishes right to your doorstep. With our carefully crafted recipes and high-quality ingredients, we aim to provide an exceptional dining experience in the comfort of your own home.<br>
      At our Dark Kitchen, we focus on creating innovative and mouthwatering dishes that cater to various dietary preferences. Whether you're a meat lover, a vegetarian, or follow a specific diet, we have a wide range of options to satisfy your cravings.<br>
      Our dedicated team of chefs and staff work tirelessly to ensure that every order is prepared with utmost care and attention to detail. We value customer satisfaction and aim to exceed your expectations with every meal.<br>
      Thank you for choosing our Dark Kitchen. We look forward to serving you and creating memorable dining experiences.</p>
    
  </section>
  </body>
  </html>
    
    `;
  
    popup.document.open();
    popup.document.write(desc);
    popup.document.close();
  }
aboutUs.addEventListener("click", openaboutUs);


