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

let foodPhotos = JSON.parse(foodPhotoJSON);
let foodPics = [];
let i = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    for (let i = 0; i < foodPhotos.length; i++) {
        foodPics.push(foodPhotos[i].img);
    }
});

function slideShow() {
    document.querySelector('#image').src = foodPics[i];

    if (i < foodPics.length - 1) {
        i++
    } else {
        i = 0;
    }

    setTimeout("slideShow()", 3000)
}

window.onload = slideShow;