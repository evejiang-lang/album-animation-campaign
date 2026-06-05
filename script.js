const videos = [...document.querySelectorAll('video')];
videos.forEach((video) => {
  video.addEventListener('play', () => videos.forEach((other) => { if (other !== video) other.pause(); }));
});
const cards = document.querySelectorAll('.film-card, .process-grid article, .hero-card');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => { if (entry.isIntersecting) entry.target.classList.add('is-visible'); });
}, { threshold: 0.18 });
cards.forEach(card => observer.observe(card));
