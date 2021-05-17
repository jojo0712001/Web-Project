var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-on-top");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');

portfolioItems.forEach(portfolioItem => {
  portfolioItem.addEventListener('mouseover', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.add('image-blur');
  });

  portfolioItem.addEventListener('mouseout', () => {
    console.log(portfolioItem.childNodes[1].classList)
    portfolioItem.childNodes[1].classList.remove('image-blur');
  });
});

