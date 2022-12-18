//Mega menu functionality. Only links open it and when the mega menu is hovered it remains open.
var megaMenu = document.getElementById('mega');
var links = document.getElementById('nav');
var cart = document.getElementById('cart');
var cartIcon = document.getElementById('cartIcon');
var cartX = document.getElementById('cartX');

links.addEventListener('mouseover', function(event){
  if (event.target.className === 'link') {
    megaMenu.style.display = 'flex';
    megaMenu.className = "mega-menu show";
  }
})
links.addEventListener('mouseover', function (event) {
  if (event.target.className === 'nav-links') {
    megaMenu.className = "mega-menu hide";
  }
})
mega.addEventListener('mouseout', function(event){
  megaMenu.className = "mega-menu hide";
  megaMenu.style.display = 'none';
})
mega.addEventListener('mouseover', function (event) {
  megaMenu.className = "mega-menu show";
  megaMenu.style.display = 'flex';
})
links.addEventListener('click', function (event) {
  if (event.target === cartIcon) {
    cart.style.display = 'flex';
  }
})
cart.addEventListener('click', function (event){
  if(event.target === cartX) {
    cart.style.display = 'none';
  }
})

const first = document.getElementById('collectionFirst');
const second = document.getElementById('collectionSecond');

scrollCarousel(first);
scrollCarousel(second);
function scrollCarousel (carousel){

  var addON = 0;
  var middles = document.getElementById('collection1');

  carousel.addEventListener('click', function (event) {
    let fullSet = middles.scrollWidth;
    let middleSet = middles.offsetWidth;
    let newSet = middleSet + addON;

    if (event.target.className === 'bookend-r') {
      event.target.previousElementSibling.scrollTo({
        top: 0,
        left: newSet,
        behavior: 'smooth'
      });
      if (newSet <= middles.scrollWidth) { addON = newSet;};
    }
    else if (event.target.className === 'bookend-l') {
      addON = 0;
      event.target.nextElementSibling.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  });
}





/* DEACTIVATED CODE
//Carousel events. Finds the page width to ensure that the carousel never overscrolls.
var main = document.getElementById('collection1');
var currentScroll = 300;
document.addEventListener('click', function(event){
  let page = main.scrollWidth;
  console.log(event.target);
  if (event.target.className === 'bookend-r'){
      event.target.previousElementSibling.scrollTo({
        top: 0,
        left: currentScroll,
        behavior: 'smooth'
      });
      if(currentScroll < page + 300){currentScroll += 300};
    } else if (event.target.className === 'bookend-l') {
      let page = main.scrollWidth;
      currentScroll = 300;
      event.target.nextElementSibling.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
})
//Logo toggles between the 2 store colors on each hover.
var logo = document.getElementById('logo');
var logoToggle = false;
logo.addEventListener('mouseover', function(event){
  if(!logoToggle){
    logo.style.color = '#4EBF8B';
    logoToggle = true;
  }else if (logoToggle) {
    logo.style.color = '#D95829';
    logoToggle = false;
  }
})
logo.addEventListener('mouseout', function (event) {
  logo.style.color = 'black';
})
*/
