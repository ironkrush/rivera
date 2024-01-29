gsap.registerPlugin(ScrollTrigger);
//section wave script
let wave1 = document.getElementById('wave1');
let wave2 = document.getElementById('wave2');
let wave3 = document.getElementById('wave3');
let wave4 = document.getElementById('wave4');


window.addEventListener('scroll', function () {
    let value = window.scrollY;

    wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
    wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
    wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
    wave4.style.backgroundPositionX = 100 + value * -2 + 'px';

})


  // JavaScript for manual and autoplaying carousel
  const carouselInner = document.getElementById('carouselInner');
  let currentIndex = 0;
  const totalItems = document.querySelectorAll('.carousel-item').length;

  function nextSlide() {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
  }

  function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carouselInner.style.transform = 'translateX(' + translateValue + ')';
  }

  // Auto play the carousel
  const intervalId = setInterval(nextSlide, 5000); // Change the interval as needed (in milliseconds)

  // Stop autoplay on manual navigation
  function stopAutoplay() {
      clearInterval(intervalId);
  }

// Get the scrollbar and container elements
const scrollbar = document.getElementById('scrollbar');
const container = document.getElementById('scrollbar-container');

// Update the scrollbar width based on the scroll position
function updateScrollbar() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);

    const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
    scrollbar.style.width = `${scrolled}%`;
}

// Add a scroll event listener to update the scrollbar
window.addEventListener('scroll', updateScrollbar);

// Add a resize event listener to update the scrollbar when the window is resized
window.addEventListener('resize', updateScrollbar);

// Flag to check if the loading logic has already been executed
let isPageLoaded = false;

document.addEventListener('DOMContentLoaded', function () {
  // Check if the loading logic has not been executed yet
  if (!isPageLoaded) {
    // Get the loading page and main content elements
    const loadingPage = document.getElementById('loader-page');
    const mainContent = document.getElementById('main');

    // Set the duration for the loading page to remain visible (4 seconds in this case)
    const loadingDuration = 4;

    // Use GSAP to animate the loading page
    gsap.to(loadingPage, {
      opacity: 0, // Fade out the loading page
      duration: 1, // Animation duration
      delay: loadingDuration, // Wait for the specified duration before starting the animation
      onComplete: function () {
        // After the animation is complete, hide the loading page and show the main content
        loadingPage.style.display = 'none';
        mainContent.style.display = 'block';

        // Set the flag to true to indicate that the loading logic has been executed
        isPageLoaded = true;
      }
    });
  } else {
    // If the loading logic has already been executed, simply display the main content
    document.getElementById('main').style.display = 'block';
  }
});


var tl = gsap.timeline();

tl.from("#nav", {
    y: -150,
    opacity: 0,
    delay: 1,
    ease: "power2.inOut"
})
tl.from("#nav #nav-img", {
    opacity:0,
    duration: .8,
    ease: "power2.inOut"
})
tl.from("#nav #nav-links ul li ", {
    opacity: 0,
    duration: .7,
    stagger: .3,
    ease: "power2.inOut"
})
tl.from("#page1 #welcome-text h1", {
    opacity: 0,
    y: 150,
    duration: 2,
    ease: "power2.inOut"
})
tl.from("#scrollbar-container", {
    opacity: 0,
    ease: "power2.inOut"
})