
//Header Bootstrap Collapsed-Navbar Ham-menu button

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});





//Right-Side-Fixed-Icons

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))




//Main-Section-Bootstrap-Carousel

//>>JavaScript to Manage Carousel Functionality
const carouselImages = document.querySelectorAll(".carousel-image");
let currentIndex = 0;

//>>Function to cycle through images
function showNextImage() {
  //>>Hide current image
  carouselImages[currentIndex].classList.remove("active");
  
  //>>Move to the next index
  currentIndex = (currentIndex + 1) % carouselImages.length;
  
  //>>Show the next image
  carouselImages[currentIndex].classList.add("active");
}

//>>Set interval for automatic carousel rotation
setInterval(showNextImage, 3000);

//>>Initialize first image as active
carouselImages[currentIndex].classList.add("active");


const imageContainers = document.querySelectorAll('.image-container');
const radioButtons = document.querySelectorAll('.radio-button');
const floatContainer = document.querySelector('.image-float-container');

radioButtons.forEach(radio => {
  radio.addEventListener('click', () => {
    const targetIndex = radio.dataset.target;
    const targetContainer = imageContainers[targetIndex];

    //>>Calculate the center position
    const containerRect = targetContainer.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    //>>Calculate the offset to center the image
    const offset = centerX - floatContainer.offsetWidth / 2;

    //>>Move the container using transform
    floatContainer.style.transform = `translateX(-${offset}px)`;
  });
});

