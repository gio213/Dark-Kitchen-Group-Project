const foodContainer = document.querySelector(".foodContainer");
import meals from "./meals.json" assert { type: "json" };

// const fetchJson = () => {
//   fetch("./meals.json")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);

//       return data;
//     });
// };
// fetchJson();

const createCard = (meal) => {
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
  namePriceDiv.appendChild(name);
  const priceDiv = document.createElement("div");
  priceDiv.classList.add("price");
  namePriceDiv.appendChild(priceDiv);
  const price = document.createElement("h1");
  priceDiv.appendChild(price);
  const tagDiv = document.createElement("div");
  tagDiv.classList.add("tags");
  card.appendChild(tagDiv);
  const tag = document.createElement("h1");
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
  rating.appendChild(star5);

  // give the elements content
  foodImg.src = meals[0].image;
};
console.log(meals);
for (let i = 0; i < meals.length; i++) {
  createCard(meals[i]);
}
