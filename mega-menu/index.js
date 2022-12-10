var megaMenu = document.getElementById('mega');
var links = document.getElementById('nav');

links.addEventListener('mouseover', function(event){
  if (event.target.className === 'link'){
    megaMenu.style.display = 'flex';
  }
})
links.addEventListener('mouseout', function(event){
  megaMenu.style.display = 'none';
  megaMenu.style.opacity = '1';
  megaMenu.style.transitionDelay = '0.5s';
})
