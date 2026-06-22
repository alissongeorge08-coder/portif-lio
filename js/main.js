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

// Filtros de projetos — 2026-06-13: fade suave ao filtrar (antes era display:none seco)
// 2026-06-12 (noite): aria-pressed para leitores de tela
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
      if (!show) {
        // Fade out antes de esconder
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px) scale(0.97)';
        card.style.pointerEvents = 'none';
        const hideAfterTransition = () => {
          card.classList.add('hidden');
          card.style.opacity = '';
          card.style.transform = '';
          card.style.pointerEvents = '';
          card.removeEventListener('transitionend', hideAfterTransition);
        };
        card.addEventListener('transitionend', hideAfterTransition, { once: true });
      } else {
        // Mostrar e animar entrada
        card.classList.remove('hidden');
        card.style.opacity = '0';
        card.style.transform = 'translateY(8px) scale(0.97)';
        card.style.pointerEvents = '';
        // Força reflow para reiniciar a transição
        void card.offsetWidth;
        card.style.opacity = '';
        card.style.transform = '';
      }
    });
  });
});

// Thumb pill overlay — 2026-06-14: injeta pill clonada sobre o thumb de cada card
// Ao hover do card, a pill sobe do fundo do thumb com slide animado.
// Reverter: remover este bloco + o bloco CSS .project-thumb-overlay / .project-thumb { position }.
document.querySelectorAll('.project-card').forEach((card) => {
  const thumb = card.querySelector('.project-thumb');
  const pill = card.querySelector('.project-body .pill');
  if (thumb && pill) {
    const overlay = document.createElement('div');
    overlay.className = 'project-thumb-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.appendChild(pill.cloneNode(true));
    thumb.appendChild(overlay);
  }
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

/* ---------- MODO ESCURO — 2026-06-22 ----------
   Toggle de tema. Inicia pela escolha salva; na ausência dela, pela
   preferência do SO. Persiste em localStorage (protegido por try/catch).
   Reverter: remover este bloco + o botão .theme-toggle do header +
   o bloco "MODO ESCURO" do style.css + o script anti-flash do <head>. */
(function () {
  const root = document.documentElement;
  const KEY = 'tema';
  let saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let dark = saved ? saved === 'dark' : (root.classList.contains('dark') || prefersDark);
  apply(dark);

  function apply(isDark) {
    root.classList.toggle('dark', isDark);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark ? '#161513' : '#F1F0EC');
    document.querySelectorAll('.theme-toggle').forEach((b) => {
      b.setAttribute('aria-pressed', String(isDark));
      const lbl = b.querySelector('.tt-label');
      if (lbl) lbl.textContent = isDark ? 'Claro' : 'Escuro';
    });
  }

  document.querySelectorAll('.theme-toggle').forEach((b) => {
    b.addEventListener('click', () => {
      dark = !root.classList.contains('dark');
      apply(dark);
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
    });
  });
})();
