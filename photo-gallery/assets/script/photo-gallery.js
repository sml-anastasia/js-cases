// PHOTO GALLERY
let photoContainer = document.querySelector('.container');
let foodPhotoJSON = `[
{
    "title": "soba with eggplants",
    "img": "eggplant-soba.JPG",
    "alt": "soba with eggplants"
},
{
    "title": "mushroon cream-soup",
    "img": "mushroom-soup.JPG",
    "alt": "mushroon cream-soup"
},
{
    "title": "pear, ginger and milk chocolate poundcake",
    "img": "pear-poundcake.JPG",
    "alt": "pear, ginger and milk chocolate poundcake"
},
{
    "title": "potato soup",
    "img": "potato-soup.JPG",
    "alt": "potato soup"
},
{
    "title": "pumpkin soup",
    "img": "pumpkin-soup.JPG",
    "alt": "pumpkin soup"
},
{
    "title": "tomato and cheese galette",
    "img": "tomato-galette.JPG",
    "alt": "tomato and cheese galette"
}
]`;

let foodPhotos;
document.addEventListener("DOMContentLoaded", function(event) {
    if (localStorage.getItem("food-photos")) {
        foodPhotos = JSON.parse(localStorage.getItem("food-photos"));
    } else {
        foodPhotos = JSON.parse(foodPhotoJSON);
    }
    console.log(foodPhotos);
    appendPhoto();
});

function appendPhoto() {
    foodPhotos.map(photo => {
        let photoBox = document.createElement('div');
        photoBox.setAttribute('class', 'photo-box');

        let foodPhoto = document.createElement('img');
        foodPhoto.setAttribute('class', 'photo');
        foodPhoto.setAttribute('src', photo.img);
        foodPhoto.setAttribute('alt', photo.alt);

        let photoTitle = document.createElement('p');
        photoTitle.setAttribute('class', 'photo-title');
        photoTitle.innerText = photo.title;

        photoBox.appendChild(foodPhoto);
        photoBox.appendChild(photoTitle);
        photoContainer.appendChild(photoBox);
    });
    localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
}