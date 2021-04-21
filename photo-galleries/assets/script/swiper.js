let foodPhotos = [
    {
        title: "soba with eggplants",
        img: "assets/images/eggplant-soba.JPG",
        alt: "soba with eggplants",
        text: "Asian style soba with eggplants, stewed with soy sauce and asian spices."
    },
    {
        title: "mushroon cream-soup",
        img: "assets/images/mushroom-soup.JPG",
        alt: "mushroom cream-soup",
        text: "Smooth and tasty soup without dairy. Good for vegan lunch."
    },
    {
        title: "pear, ginger and milk chocolate poundcake",
        img: "assets/images/pear-poundcake.JPG",
        alt: "pear, ginger and milk chocolate poundcake",
        text: "Warm poundcake with gentle pears, milk chocolate and spicy ginger. Perfect for fall picnic."
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

let swiperWrap = document.querySelector('.swiper-wrapper');

document.addEventListener("DOMContentLoaded", function (event) {
    appendSlides();
});

function appendSlides() {
    foodPhotos.map(slide => {
        let slideItem = document.createElement('div');
        slideItem.setAttribute('class', 'swiper-slide');
        let slideImg = document.createElement('img');
        slideImg.setAttribute('class', 'slide-img');
        slideImg.src = slide.img;
        let slideTitle = document.createElement('p');
        slideTitle.setAttribute('class', 'slide-title');
        slideTitle.innerHTML = slide.title;
        let slideText = document.createElement('p');
        slideTitle.setAttribute('class', 'slide-text');
        slideText.innerHTML = slide.text;

        slideItem.appendChild(slideImg);
        slideItem.appendChild(slideTitle);
        slideItem.appendChild(slideText);
        swiperWrap.appendChild(slideItem);
    })
}

let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});