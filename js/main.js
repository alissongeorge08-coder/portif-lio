/**
 * Portfólio Alisson George — interações
 */

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('visible'));
}

// Marquee: duplica o conteúdo para loop contínuo
const track = document.querySelector('.marquee-track');
if (track) {
  track.innerHTML += track.innerHTML;
}

// Filtros de projetos
// 2026-06-12 (noite): aria-pressed para leitores de tela saberem o filtro ativo
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card[data-cat]');
filterBtns.forEach((b) => b.setAttribute('aria-pressed', b.classList.contains('active') ? 'true' : 'false'));
filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const cat = btn.dataset.filter;
    projectCards.forEach((card) => {
      const show = cat === 'todos' || card.dataset.cat.split(' ').includes(cat);
      card.classList.toggle('hidden', !show);
    });
  });
});

// Formulário de contato → mailto
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const tel = form.telefone.value.trim();
    const msg = form.mensagem.value.trim();
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nTelefone: ${tel}\n\n${msg}`
    );
    window.location.href =
      `mailto:alissongeorge08@gmail.com?subject=${encodeURIComponent('Contato via portfólio — ' + nome)}&body=${body}`;
  });
}
