
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${(i - index) * 100}%)`;
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Initialize slider
  showSlide(currentIndex);

