document.addEventListener("DOMContentLoaded", () => {
  const logosContainer = document.querySelector(".brand-logos");
  const logos = document.querySelectorAll(".brand-logos img");
  const totalLogos = logos.length;

  // Duplicate logos for seamless looping
  for (let i = 0; i < totalLogos; i++) {
    const clone = logos[i].cloneNode(true);
    logosContainer.appendChild(clone);
  }
});


  document.addEventListener("DOMContentLoaded", () => {
    const sliderTrack = document.querySelector(".slider-track");
    const sliderCards = document.querySelectorAll(".slider-card");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const cardWidth = sliderCards[0].offsetWidth + 20; // Card width + padding
    let currentPosition = 0;

    // Move Slider
    const moveSlider = (direction) => {
      const maxScroll = (sliderCards.length - 4) * cardWidth; // Adjust for visible cards
      if (direction === "next" && currentPosition > -maxScroll) {
        currentPosition -= cardWidth;
      } else if (direction === "prev" && currentPosition < 0) {
        currentPosition += cardWidth;
      }
      sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    };

    // Event Listeners
    prevButton.addEventListener("click", () => moveSlider("prev"));
    nextButton.addEventListener("click", () => moveSlider("next"));
  });

