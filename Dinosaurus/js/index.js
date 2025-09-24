// ========== Smooth scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ========== Scroll effects (header + hero parallax) ==========
let lastScrollY = 0;
function onScroll() {
  const y = window.scrollY;

  // Header background
  const header = document.querySelector('header');
  if (header) {
    header.style.background = y > 100
      ? 'rgba(0, 0, 0, 0.95)'
      : 'rgba(0, 0, 0, 0.9)';
  }

  // Hero parallax
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${y * 0.5}px)`;
  }

  lastScrollY = y;
}
window.addEventListener('scroll', () => requestAnimationFrame(onScroll));

// ========== Fade-in on scroll ==========
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// ========== Dinosaur cards (3D tilt) ==========
document.querySelectorAll('.dinosaur-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * 10}deg) rotateY(${x * 10}deg) scale(1.05)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// ========== Timeline stagger ==========
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// ========== Dynamic particles ==========
function createParticle() {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random properties
  particle.style.left = Math.random() * 100 + '%';
  particle.style.width = particle.style.height = Math.random() * 6 + 4 + 'px';
  particle.style.background = `hsl(${Math.random()*360}, 70%, 70%)`;
  particle.style.opacity = Math.random().toFixed(2);
  particle.style.animationDuration = (Math.random() * 8 + 8) + 's';
  particle.style.animationDelay = Math.random() * 3 + 's';

  document.querySelector('.particles')?.appendChild(particle);

  // Cleanup
  setTimeout(() => particle.remove(), 20000);
}
setInterval(createParticle, 1000);