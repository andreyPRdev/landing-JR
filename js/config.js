// WHATSAPP
const botoes = document.querySelectorAll('.btn-whatsapp');

botoes.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const msg = encodeURIComponent("Olá! Quero agendar um serviço de estética automotiva.");
    window.open(`https://wa.me/5548984430593?text=${msg}`, '_blank');
  });
});

// ELEMENTOS
const elementos = document.querySelectorAll('.fade');
const zap = document.querySelector('.zap-float');

// SCROLL ÚNICO
window.addEventListener('scroll', () => {

  // animação
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      el.classList.add('show');
    }
  });

  // botão zap
  if (zap) {
    if (window.scrollY > 300) {
      zap.style.opacity = '1';
    } else {
      zap.style.opacity = '0';
    }
  }

});

// SCROLL SUAVE
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});