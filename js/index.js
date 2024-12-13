const carousel = document.querySelector('.carousel--popular .carousel-items');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('active');
});

carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Скорость прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

// Поддержка тачпадов и мобильных устройств
carousel.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('active');
});

carousel.addEventListener('touchend', () => {
    isDown = false;
    carousel.classList.remove('active');
});

carousel.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.5; // Скорость прокрутки
    carousel.scrollLeft = scrollLeft - walk;
});

const carouselItems = document.querySelector('.carousel--auctions .carousel-items');
const backButton = document.querySelector('.carousel.back');
const nextButton = document.querySelector('.carousel.next');

let scrollAmount = 0;

nextButton.addEventListener('click', () => {
    if (scrollAmount < carouselItems.scrollWidth - carouselItems.clientWidth) {
        scrollAmount += carouselItems.clientWidth;
        carouselItems.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

backButton.addEventListener('click', () => {
    if (scrollAmount > 0) {
        scrollAmount -= carouselItems.clientWidth;
        carouselItems.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
});

