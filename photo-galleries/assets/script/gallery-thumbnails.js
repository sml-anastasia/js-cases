// GALLERY WITH THUMBNAILS

function onSelectImage(sender) {
    document.getElementById("main-photo").src = sender.src;
}


// let foodPhotoJSON = `[
// {
//     "title": "soba with eggplants",
//     "img": "assets/images/eggplant-soba.JPG",
//     "alt": "soba with eggplants"
// },
// {
//     "title": "mushroon cream-soup",
//     "img": "assets/images/mushroom-soup.JPG",
//     "alt": "mushroon cream-soup"
// },
// {
//     "title": "pear, ginger and milk chocolate poundcake",
//     "img": "assets/images/pear-poundcake.JPG",
//     "alt": "pear, ginger and milk chocolate poundcake"
// },
// {
//     "title": "potato soup",
//     "img": "assets/images/potato-soup.JPG",
//     "alt": "potato soup"
// },
// {
//     "title": "pumpkin soup",
//     "img": "assets/images/pumpkin-soup.JPG",
//     "alt": "pumpkin soup"
// },
// {
//     "title": "tomato and cheese galette",
//     "img": "assets/images/tomato-galette.JPG",
//     "alt": "tomato and cheese galette"
// }
// ]`;

// const photoBox = document.querySelector('.photo-box');
// let foodPhotos = JSON.parse(foodPhotoJSON);

// document.addEventListener("DOMContentLoaded", function (event) {
//     if (localStorage.getItem("food-photos")) {
//         foodPhotos = JSON.parse(localStorage.getItem("food-photos"));
//     } else {
//         foodPhotos = JSON.parse(foodPhotoJSON);
//     }
//     appendPhoto();
//     console.log('test');
// });

// function appendPhoto() {
//     let foodPhoto = document.createElement('img');
//     foodPhoto.setAttribute('class', 'photo');
//     let photoTitle = document.createElement('p');
//     photoTitle.setAttribute('class', 'photo-title');

//     foodPhotos.map(photo =>{
//         for(i = 0; i<foodPhotos.length; i++) {
//             foodPhoto.setAttribute('src', photo[i].img);
//             foodPhoto.setAttribute('alt', photo[i].alt);
//             photoTitle.innerText = photo[i].title;

//             photoBox.appendChild(foodPhoto);
//             photoBox.appendChild(photoTitle);

//             localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
//         }
//     })
// }

// function onSelectImage(sender) {
//     document.getElementById("main-photo").src = sender.src;
// }