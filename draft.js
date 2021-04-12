// let foodPics = [];
// // let foodAlts = [];
// // let foodTitles = [];
// let mainImage = document.querySelector('#main-photo');

// function changeNextPhoto(pic) {
//     mainImage.src = pic;
// }

// document.addEventListener("DOMContentLoaded", function(event) {
//     for (let i = 0; i < foodPhotos.length; i++) {
//         foodPics.push(foodPhotos[i].img);
//         // foodAlts.push(foodPhotos[i].alt);
//         // foodTitles.push(foodPhotos[i].title);
//     }

//     let imageString = "";
//     for (let pic of foodPics) {
//         imageString += `<img src='${pic}' class='image' onclick='changeNextPhoto("${pic}");'>`;
//     }
//     document.querySelector('.photo-box').innerHTML = imageString;
// });

// // function changePrevPhoto() {
// //     let prev = document.getElementById('photo');
// //     prev.src = 'assets/images/P9040610.JPG';
// // }



// // function onSelectImage(src) {
// //     document.getElementById("mainImage").src = src;
// // }

// // document.addEventListener("DOMContentLoaded", function () {
// //     let urls = ["cats/1.jpg", "cats/2.jpg", "cats/3.jpg", "cats/4.jpg", "cats/5.jpg", "cats/2.jpg"];

// //     let optionsString = "";
// //     for (let url of urls) {
// //         optionsString += `<img src='${url}' class='image' onclick='onSelectImage("${url}");'>`;
// //     }
// //     document.getElementById("container").innerHTML = optionsString;
// // });

// // let photoGallery = document.querySelector('.gallery');
// // let currentPhoto = document.querySelector('.photo');
// // let photoBox = document.querySelector('.photo-box');
// // let nextBtn = document.querySelector('#next');
// // let foodPhotos;
// // let foodPics = [];

// // document.addEventListener("DOMContentLoaded", function(event) {
// //     if (localStorage.getItem("food-photos")) {
// //         foodPhotos = JSON.parse(localStorage.getItem("food-photos"));
// //     } else {
// //         foodPhotos = JSON.parse(foodPhotoJSON);
// //     }
// //     for (let i = 0; i < foodPhotos.length; i++) {
// //         foodPics.push(foodPhotos[i].img);
// //     }
// //     console.log(foodPhotos);
// //     console.log(foodPics);
// //     // appendPhoto();
// // });

// // function onSelectImage(url) {
// //     document.getElementById("mainImage").src = url;
// // }

// // nextBtn.addEventListener('click', changePhoto);

// // function changePhoto(event) {
// //     let foodPhoto = document.createElement('img');
// //     foodPhoto.setAttribute('class', 'photo');
// //     let photoTitle = document.createElement('p');
// //     photoTitle.setAttribute('class', 'photo-title');

// //     photoBox.appendChild(foodPhoto);
// //     photoBox.appendChild(photoTitle);
// //     photoGallery.appendChild(photoBox);

// //     for (let i = 0; i<foodPhotos.length; i++) {
// //         foodPhoto.setAttribute('src', foodPhotos[i].img);
// //         foodPhoto.setAttribute('alt', foodPhotos[i].alt);
// //         photoTitle.innerText = foodPhotos[i].title;
// //     }
// //     localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
// // }

// // function appendPhoto() {
// //     let photoBox = document.createElement('div');
// //     photoBox.setAttribute('class', 'photo-box');

// //     foodPhoto = document.createElement('img');
// //     foodPhoto.setAttribute('class', 'photo');
// //     foodPhoto.setAttribute('src', foodPhotos[0].img);
// //     foodPhoto.setAttribute('alt', foodPhotos[0].alt);

// //     let photoTitle = document.createElement('p');
// //     photoTitle.setAttribute('class', 'photo-title');
// //     photoTitle.innerText = foodPhotos[0].title;

// //     photoBox.appendChild(foodPhoto);
// //     photoBox.appendChild(photoTitle);
// //     photoGallery.appendChild(photoBox);

// //     localStorage.setItem("food-photos", JSON.stringify(foodPhotos));
// // }



// // function showNextPhoto() {
// //     let nextPhoto = document.querySelector('.photo');
// //     for (let i = 0; i < foodPics; i++) {
// //         nextPhoto.src = foodPics[i];
// //         nextPhoto.style.display = block;
// //     }
// // }