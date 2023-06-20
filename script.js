
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
    <div class="logo"></div>
    <h1 id="form-title">Contact Form</h1>
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

