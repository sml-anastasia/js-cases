const [current, imgs] = [
    document.querySelector('#current'),
    document.querySelectorAll('.imgs img'),
];
imgs.forEach(img =>
    img.addEventListener('click', e => (current.src = e.target.src))
);