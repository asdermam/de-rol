const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 24), { passive: true });

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
  document.body.classList.toggle('menu-open', !open);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
  document.body.classList.remove('menu-open');
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px' });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href="#oldal-teteje"]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

const form = document.getElementById('quote-form');
const toast = document.getElementById('toast');
const formStatus = document.getElementById('form-status');
const submitButton = form.querySelector('button[type="submit"]');
const submitButtonContent = submitButton.innerHTML;

form.addEventListener('submit', async event => {
  event.preventDefault();
  formStatus.className = 'form-status';
  formStatus.textContent = 'Küldés folyamatban…';
  submitButton.disabled = true;
  submitButton.textContent = 'Küldés…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || 'Az üzenet nem küldhető el.');
    }

    form.reset();
    formStatus.classList.add('success');
    formStatus.textContent = 'Köszönjük! Az ajánlatkérés sikeresen megérkezett.';
  } catch {
    formStatus.classList.add('error');
    formStatus.textContent = 'A küldés most nem sikerült. Kérjük, próbálja újra később.';
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = submitButtonContent;
  }
});

const params = new URLSearchParams(window.location.search);
if (params.get('sent') === '1') {
  toast.textContent = 'Köszönjük! Az ajánlatkérés sikeresen megérkezett.';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 5000);
  window.history.replaceState({}, '', `${window.location.pathname}${window.location.hash}`);
}
