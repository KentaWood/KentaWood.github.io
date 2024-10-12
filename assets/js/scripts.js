let slideIndexFootball = 0;
let slideIndexTaiko = 0;
showSlides('football', slideIndexFootball);
showSlides('taiko', slideIndexTaiko);

function showSlides(slideshowClass, slideIndex) {
    let i;
    let slides = document.getElementsByClassName(slideshowClass);
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() { showSlides(slideshowClass, slideIndex); }, 3000); // Change image every 3 seconds
}
