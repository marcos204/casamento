// Contagem regressiva
const countdown = document.getElementById('countdown');
const weddingDate = new Date('2026-07-18T16:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "O grande dia chegou!";
    }
}

const interval = setInterval(updateCountdown, 1000);

// Carrossel de fotos
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselInner.children.length;
    updateCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Mapa do Google -15.806825250402246, -47.92432958537294
function initMap() {
    const location = { lat: -15.806825250402246, lng: -47.92432958537294 }; // Coordenadas do local
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
    });
}

// Música de fundo
const music = document.getElementById('background-music');
window.addEventListener('click', () => {
    music.play();
});

// Efeitos de rolagem
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});