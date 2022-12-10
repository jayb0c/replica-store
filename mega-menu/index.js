var megaMenu = document.getElementById('mega');
var links = document.getElementById('nav');

links.addEventListener('mouseover', function(event){
  if (event.target.className === 'link') {
    megaMenu.style.display = 'flex';
  }
})
links.addEventListener('mouseover', function (event) {
  if (event.target.className === 'nav-links') {
    megaMenu.style.display = 'none';
  }
})
mega.addEventListener('mouseout', function(event){
  megaMenu.style.display = 'none';
  megaMenu.style.opacity = '1';
  megaMenu.style.transitionDelay = '0.5s';
})
mega.addEventListener('mouseover', function (event) {
    megaMenu.style.display = 'flex';
})
