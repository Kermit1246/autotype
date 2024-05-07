const darkModeToggle = document.getElementById('dark-mode-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  sunIcon.style.display = sunIcon.style.display === 'none' ? 'inline' : 'none';
  moonIcon.style.display = moonIcon.style.display === 'none' ? 'inline' : 'none';
});