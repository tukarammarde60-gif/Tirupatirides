// Fade-in for text and list items
const faders = document.querySelectorAll('.fade-in-up');
const sliders = document.querySelectorAll('.fade-in-left');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));
sliders.forEach(slider => appearOnScroll.observe(slider));
