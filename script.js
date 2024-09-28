// Array of image sources for the carousel
const images = [
    'images/manchester1.jpg',
    'images/library1.jpg',
    'images/gallery.jpg',
    'images/stadium1.jpg'
];

let currentIndex = 0; // Track the current image index

// Function to show the next image
function showNextImage() {
    const carouselImage = document.getElementById('carousel-image');
    currentIndex = (currentIndex + 1) % images.length; // Loop to the first image after the last one
    carouselImage.src = images[currentIndex];
}

// Function to show the previous image
function showPreviousImage() {
    const carouselImage = document.getElementById('carousel-image');
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to the last image after the first one
    carouselImage.src = images[currentIndex];
}

// Add event listeners for the Next and Previous buttons
document.getElementById('next-btn').addEventListener('click', showNextImage);
document.getElementById('prev-btn').addEventListener('click', showPreviousImage);

// Automatically change the image every 5 seconds
setInterval(showNextImage, 5000);