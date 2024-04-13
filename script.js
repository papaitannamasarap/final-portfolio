document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.hobbies-carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].style.transform = 'translateX(-100%)';
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].style.transform = 'translateX(0)';
    }

    setInterval(showNextSlide, 5000); // Change slide every 5 seconds
});
