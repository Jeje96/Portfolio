AOS.init();

$(document).ready(function(){
  $('.navbar').click(function(){
    $('.menu').toggleClass('show');
  });

  $('.menu a').click(function(){
    $('.menu').removeClass('show');
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
