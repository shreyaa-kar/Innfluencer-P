

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Hero Section Button Animations
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 5px 15px rgba(255, 64, 129, 0.5)';
      });
  
      button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = 'none';
      });
    });
  
    // Gallery Image Zoom on Click
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
      img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.classList.add('image-modal');
        modal.innerHTML = `
          <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${img.src}" alt="${img.alt}">
          </div>
        `;
        document.body.appendChild(modal);
  
        const closeButton = modal.querySelector('.close-button');
        closeButton.addEventListener('click', () => {
          modal.remove();
        });
  
        modal.addEventListener('click', event => {
          if (event.target === modal) {
            modal.remove();
          }
        });
      });
    });
  
    // Scroll Animation for Sections
    const sections = document.querySelectorAll('section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });
  });
  let currentIndex = 0;
const logos = document.querySelector('.brand-logos');
const totalImages = document.querySelectorAll('.brand-logos img').length;

function moveSlide() {
  currentIndex++;
  if (currentIndex > totalImages - 3) {
    currentIndex = 0; // Reset to the first image when reaching the end
  }
  logos.style.transform = `translateX(-${currentIndex * 20}%)`;
}



// Infinite looping
function nextSlide() {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
}

const sliderTrack = document.querySelector('.slider-track');
const cards = document.querySelectorAll('.slider-card');
let currentIndex = 0;

function updateSlider() {
  const offset = -(currentIndex * 100); // Shift by 100% for each slide
  sliderTrack.style.transform = `translateX(${offset}%)`;
}

function moveSlide() {
  currentIndex = (currentIndex + 1) % cards.length; // Loop back to start after last slide
  updateSlider();
}

setInterval(moveSlide, 3000); // Auto-slide every 3 seconds