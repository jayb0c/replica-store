var megaMenu = document.getElementById('mega');
var links = document.getElementById('nav');

links.addEventListener('mouseover', function(event){
  if (event.target.className === 'link') {
    megaMenu.style.display = 'flex';
    megaMenu.style.opacity = '1';
    megaMenu.style.transitionDelay = '2s';
  }
})
links.addEventListener('mouseover', function (event) {
  if (event.target.className === 'nav-links') {
    megaMenu.style.display = 'none';
    megaMenu.style.opacity = '1';
    megaMenu.style.transitionDelay = '2s';
  }
})
mega.addEventListener('mouseout', function(event){
  megaMenu.style.display = 'none';
  megaMenu.style.opacity = '1';
  megaMenu.style.transitionDelay = '2s';
})
mega.addEventListener('mouseover', function (event) {
    megaMenu.style.display = 'flex';
  megaMenu.style.opacity = '1';
  megaMenu.style.transitionDelay = '2s';
})

var main = document.getElementById('test');
var currentScroll = 300;

document.addEventListener('click', function(event){
  let page = main.offsetWidth;
    if (event.target.className === 'bookend-r') {
      event.target.previousElementSibling.scrollTo({
        top: 0,
        left: currentScroll,
        behavior: 'smooth'
      });
      if(currentScroll < page + 300){currentScroll += 300};
    } else if (event.target.className === 'bookend-l') {
      let page = main.offsetWidth;
      currentScroll = 300;
      event.target.nextElementSibling.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
})
