// PHOTO GALLERY
let foodPhotoJSON = `[
{
    "title": "soba with eggplants",
    "img": "assets/images/eggplant-soba.JPG",
    "alt": "soba with eggplants"
},
{
    "title": "mushroon cream-soup",
    "img": "assets/images/mushroom-soup.JPG",
    "alt": "mushroon cream-soup"
},
{
    "title": "pear, ginger and milk chocolate poundcake",
    "img": "assets/images/pear-poundcake.JPG",
    "alt": "pear, ginger and milk chocolate poundcake"
},
{
    "title": "potato soup",
    "img": "assets/images/potato-soup.JPG",
    "alt": "potato soup"
},
{
    "title": "pumpkin soup",
    "img": "assets/images/pumpkin-soup.JPG",
    "alt": "pumpkin soup"
},
{
    "title": "tomato and cheese galette",
    "img": "assets/images/tomato-galette.JPG",
    "alt": "tomato and cheese galette"
}
]`;

let photoGallery = document.querySelector('.gallery');
let currentPhoto = document.querySelector('.photo');
let photoBox = document.querySelector('.photo-box');
let nextBtn = document.querySelector('#next');
let foodPhotos;
let foodPics = [];

document.addEventListener("DOMContentLoaded", function(event) {
    if (localStorage.getItem("food-photos")) {
        foodPhotos = JSON.parse(localStorage.getItem("food-photos"));
    } else {
        foodPhotos = JSON.parse(foodPhotoJSON);
    }
    for (let i = 0; i < foodPhotos.length; i++) {
        foodPics.push(foodPhotos[i].img);
    }
    console.log(foodPhotos);
    console.log(foodPics);
    // appendPhoto();
});

function onSelectImage(url) {
    document.getElementById("mainImage").src = url;
}

nextBtn.addEventListener('click', changePhoto);

function changePhoto(event) {
    let foodPhoto = document.createElement('img');
    foodPhoto.setAttribute('class', 'photo');
    let photoTitle = document.createElement('p');
    photoTitle.setAttribute('class', 'photo-title');

    photoBox.appendChild(foodPhoto);
    photoBox.appendChild(photoTitle);
    photoGallery.appendChild(photoBox);

    for (let i = 0; i<foodPhotos.length; i++) {
        foodPhoto.setAttribute('src', foodPhotos[i].img);
        foodPhoto.setAttribute('alt', foodPhotos[i].alt);
        photoTitle.innerText = foodPhotos[i].title;
    }
    localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
}

// function appendPhoto() {
//     let photoBox = document.createElement('div');
//     photoBox.setAttribute('class', 'photo-box');

//     foodPhoto = document.createElement('img');
//     foodPhoto.setAttribute('class', 'photo');
//     foodPhoto.setAttribute('src', foodPhotos[0].img);
//     foodPhoto.setAttribute('alt', foodPhotos[0].alt);

//     let photoTitle = document.createElement('p');
//     photoTitle.setAttribute('class', 'photo-title');
//     photoTitle.innerText = foodPhotos[0].title;

//     photoBox.appendChild(foodPhoto);
//     photoBox.appendChild(photoTitle);
//     photoGallery.appendChild(photoBox);

//     localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
// }



// function showNextPhoto() {
//     let nextPhoto = document.querySelector('.photo');
//     for (let i = 0; i < foodPics; i++) {
//         nextPhoto.src = foodPics[i];
//         nextPhoto.style.display = block;
//     }
// }