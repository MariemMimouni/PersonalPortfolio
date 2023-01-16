const button = document.querySelector('.button--nav');
const mobile_menu = document.querySelector('.mobile-menu');
button.addEventListener('click', function(){
this.classList.toggle('is-active');
mobile_menu.classList.toggle('is-open')
})
var pos1 = window.pageYOffset;
window.onscroll = function() {
var pos2s = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  pos1 = pos2;
}