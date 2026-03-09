// Splash screen com efeito espelho
const mirrorSplash = document.getElementById('mirrorSplash');
if (mirrorSplash) {
  mirrorSplash.addEventListener('click', () => {
    mirrorSplash.classList.add('fade-out');
    setTimeout(() => {
      mirrorSplash.style.display = 'none';
      // Criar partículas de vidro após sair do splash
      createPageGlassParticles();
    }, 800);
  });
}

// Criar partículas de vidro flutuantes na página
function createPageGlassParticles() {
  const container = document.createElement('div');
  container.className = 'glass-particles';
  container.style.cssText = `
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 1;
    overflow: hidden;
  `;
  document.body.appendChild(container);
  
  // Criar 15 partículas flutuantes
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 60 + 20;
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = Math.random() * 20 + 25;
    const delay = Math.random() * 5;
    const direction = Math.random() > 0.5 ? 1 : -1;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${startX}%;
      top: ${startY}%;
      background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6) 0%, rgba(10,110,189,0.3) 40%, transparent 70%);
      border-radius: 50%;
      opacity: 0;
      box-shadow: 
        0 0 20px rgba(255,255,255,0.3),
        inset -2px -2px 8px rgba(0,0,0,0.2),
        inset 2px 2px 8px rgba(255,255,255,0.3);
      filter: blur(0.5px);
      animation: floatGlass ${duration}s ease-in-out ${delay}s infinite;
    `;
    container.appendChild(particle);
  }
}

// Adicionar estilos de animação das partículas
const glassStyle = document.createElement('style');
glassStyle.textContent = `
  @keyframes floatGlass {
    0% {
      transform: translateY(0) translateX(0) scale(0.8);
      opacity: 0;
    }
    5% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.5;
      transform: translateY(-50vh) translateX(${Math.random() > 0.5 ? '80' : '-80'}px) scale(1.1);
    }
    95% {
      opacity: 0.2;
    }
    100% {
      transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '-100' : '100'}px) scale(0.5);
      opacity: 0;
    }
  }
`;
document.head.appendChild(glassStyle);

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Formulário WhatsApp
function sendWA() {
  const name = document.querySelector('input[type=text]').value;
  const phone = document.querySelector('input[type=tel]').value;
  const service = document.querySelector('select').value;
  const msg = document.querySelector('textarea').value;
  if (!name) { alert('Por favor, informe seu nome.'); return; }
  const text = `Olá! Vim pelo site.\n*Nome:* ${name}\n*Telefone:* ${phone || 'Não informado'}\n*Serviço:* ${service || 'Não especificado'}\n*Mensagem:* ${msg || '—'}`;
  window.open(`https://wa.me/5512981711143?text=${encodeURIComponent(text)}`, '_blank');
}

// Nav ativo no scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const y = window.scrollY + 100;
  sections.forEach(s => {
    const link = document.querySelector(`nav a[href="#${s.id}"]`);
    if (link) link.style.color = y >= s.offsetTop && y < s.offsetTop + s.offsetHeight ? '#fff' : '';
  });
});

// CAROUSEL DE SERVICOS
let currentSlide = 0;
let autoplayTimer;
const autoplayDelay = 2400;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const slidesTrack = document.querySelector('.carousel-slides');
const carouselRoot = document.getElementById('servicesCarousel');

function nextSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  if (!slides.length) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

function goToSlide(n) {
  if (!slides.length) return;
  currentSlide = n;
  updateCarousel();
}

function updateCarousel() {
  if (!slidesTrack) return;
  slidesTrack.style.transform = `translateX(-${currentSlide * 100}%)`;

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}

function startAutoplay() {
  if (!slides.length) return;
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
  clearInterval(autoplayTimer);
}

if (slides.length && slidesTrack) {
  updateCarousel();
  startAutoplay();

  carouselRoot?.addEventListener('mouseenter', stopAutoplay);
  carouselRoot?.addEventListener('mouseleave', startAutoplay);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      startAutoplay();
    }
    if (e.key === 'ArrowLeft') {
      prevSlide();
      startAutoplay();
    }
  });
}
