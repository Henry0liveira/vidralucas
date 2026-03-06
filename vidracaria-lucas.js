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
