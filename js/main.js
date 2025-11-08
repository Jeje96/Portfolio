AOS.init();

const iconBar = document.querySelector('.navbar'); // icona menu
const menu = document.querySelector('.menu');       // menu
const menuLinks = document.querySelectorAll('.menu a'); // tutti i link nel menu

// Toggle menu cliccando sull'icona
iconBar.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Chiudi il menu cliccando su un link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('show');
  });
});





/* qui faccio in modo che il titolo h1 cambi ogni tot */
const roles = ["Web Developer", "Frontend Developer", "UI/UX Designer"];
let index = 0;
const span = document.getElementById("role");

function changeRole() {
  span.textContent = roles[index];
  index = (index + 1) % roles.length;
}
changeRole();
setInterval(changeRole, 1500);
