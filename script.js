let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let Rewan = document.querySelector('.Rawan');

window.onscroll = function () {
    let value = window.scrollY;

    // Parallax effect
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';

    // Adjust font size and position for Rawan
    Rewan.style.fontSize = Math.min(value * 3, 67) + 'px';
    if (value >= 67) {
        Rewan.style.position = 'fixed';
    } else {
        Rewan.style.position = 'absolute';
    }

    if (value >= 478) {
        Rewan.style.display = 'none';
    } else {
        Rewan.style.display = 'block';
    }

    // Background color change based on scroll
    if (value >= 127) {
        document.querySelector('.main').style.background = 'linear-gradient(#45001e, #070233)';
    } else {
        document.querySelector('.main').style.background = 'linear-gradient(#2d5fa8, #152d50)';
    }
}
