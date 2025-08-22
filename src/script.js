const hamburger = document.getElementById("hamburger");
const slider = document.getElementById("slider");

hamburger.addEventListener('click', function() {
    slider.classList.toggle('opacity-0');
    slider.classList.toggle('-translate-y-full');
    slider.classList.toggle('pointer-events-none');
    
    slider.classList.toggle('opacity-100');
    slider.classList.toggle('translate-y-0');
    slider.classList.toggle('pointer-events-auto');
});