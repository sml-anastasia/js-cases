// CAROUSEL GALLERY
let foodPhotos = [
{
    title: "soba with eggplants",
    img: "assets/images/eggplant-soba.JPG",
    alt: "soba with eggplants",
    text: "soba with eggplants"
},
{
    title: "mushroon cream-soup",
    img: "assets/images/mushroom-soup.JPG",
    alt: "mushroon cream-soup",
    text: "mushroon cream-soup"
},
{
    title: "pear, ginger and milk chocolate poundcake",
    img: "assets/images/pear-poundcake.JPG",
    alt: "pear, ginger and milk chocolate poundcake",
    text: "pear, ginger and milk chocolate poundcake"
},
{
    title: "potato soup",
    img: "assets/images/potato-soup.JPG",
    alt: "potato soup",
    text: "potato soup"
},
{
    title: "pumpkin soup",
    img: "assets/images/pumpkin-soup.JPG",
    alt: "pumpkin soup",
    text: "pumpkin soup"
},
{
    title: "tomato and cheese galette",
    img: "assets/images/tomato-galette.JPG",
    alt: "tomato and cheese galette",
    text: "tomato and cheese galette"
}
];

let img = document.getElementById("food-img");
let title = document.getElementById("food-title");
let text = document.getElementById("food-text");

const prevBtn = document.querySelector(".btn-prev");
const nextBtn = document.querySelector(".btn-next");

let currentItem = 0;

document.addEventListener("DOMContentLoaded", function (event) {
    showFoodCard();
});

function showFoodCard() {
    const item = foodPhotos[currentItem];
    img.src = item.img;
    img.setAttribute('alt', `${item.alt}`);
    title.innerHTML = item.title;
    text.innerHTML = item.text;
}

nextBtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > foodPhotos.length - 1) {
        currentItem = 0;
    }
    showFoodCard();
});

prevBtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = foodPhotos.length - 1;
    }
    showFoodCard();
});