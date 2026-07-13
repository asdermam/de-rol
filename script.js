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

const form = document.getElementById('quote-form');
const toast = document.getElementById('toast');
const publicProfile = 'https://provendo.hu/ad/de-rol-tetomester-baranya-504452';

form.addEventListener('submit', async event => {
  event.preventDefault();
  const data = new FormData(form);
  const text = `Ajánlatkérés a weboldalról\n\nNév: ${data.get('name')}\nTelepülés: ${data.get('city')}\nSzolgáltatás: ${data.get('service')}\n\nLeírás:\n${data.get('message')}`;

  try {
    await navigator.clipboard.writeText(text);
    toast.textContent = 'Az üzenetet kimásoltuk. Nyílik az ajánlatkérő oldal…';
  } catch {
    toast.textContent = 'Nyílik a nyilvános ajánlatkérő oldal…';
  }

  toast.classList.add('show');
  setTimeout(() => {
    window.open(publicProfile, '_blank', 'noopener');
    toast.classList.remove('show');
  }, 700);
});
