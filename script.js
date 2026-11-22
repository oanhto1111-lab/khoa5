const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const themeButton = document.querySelector('.theme-toggle');
themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-theme');
  themeButton.textContent = isDark ? '☀' : '☾';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const filterStatus = document.querySelector('#filter-status');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });

    projectCards.forEach((card) => {
      const shouldShow = filter === 'all' || card.dataset.category === filter;
      card.hidden = !shouldShow;
      if (shouldShow) visibleCount += 1;
    });

    filterStatus.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'project' : 'projects'}.`;
  });
});

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    formStatus.textContent = 'Please complete all fields with valid information.';
    return;
  }

  formStatus.textContent = 'Thanks! Your message passed the form checks. This demo does not send messages.';
  contactForm.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
