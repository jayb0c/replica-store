//Mega menu functionality. Only links open it and when the mega menu is hovered it remains open.
var megaMenu = document.getElementById('mega');
var links = document.getElementById('nav');
var cart = document.getElementById('cart');
var cartIcon = document.getElementById('cartIcon');
var cartX = document.getElementById('cartX');
var mobile = false;

if (window.scrollY > (megaMenu.offsetHeight + megaMenu.offsetTop)) {
  megaMenu.className = "mega-menu hide";
}
links.addEventListener('mouseover', function(event){
  if(mobile === true){ return; }
  if (event.target.className === 'link desk-only' || event.target === megaMenu) {
    megaMenu.style.display = 'flex';
    megaMenu.className = "mega-menu show";
  }
  else{
    megaMenu.className = "mega-menu hide";
  }
})

mega.addEventListener('mouseout', function(event){
  megaMenu.className = "mega-menu hide";
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

scrollCarousel(first, '1');
scrollCarousel(second, '2');
function scrollCarousel (carousel, num){
  var addON = 0;
  var middles = document.getElementById('collection' + num);

  carousel.addEventListener('click', function (event) {
    let fullSet = middles.scrollWidth;
    let middleSet = middles.offsetWidth;
    let rightSet = middleSet + addON;
    let leftSet = rightSet - middleSet;
    let child = middles.firstElementChild.offsetWidth;
    let save = 0;

    if (rightSet > fullSet - child){
      middles.classList.add('wrap1');
      middles.scrollTo(0,0);
      setTimeout(function () {
        middles.classList.add('wrap2');
      }, 200);
      addON = 0;
    }
    else{
      middles.classList.remove('wrap2');
      middles.classList.remove('wrap1');
      if (event.target.className === 'bookend-r') {
        event.target.previousElementSibling.scrollTo({
          top: 0,
          left: rightSet,
          behavior: 'smooth'
        });
        if (rightSet <= middles.scrollWidth) { addON = rightSet; };
      }


      /*
      if (event.target.className === 'bookend-l') {
        if (addON == 0) {
          middles.classList.add('wrap2');
          middles.scrollTo(fullSet, 0);
          setTimeout(function () {
            middles.classList.add('wrap1');
          }, 200);
        } else{
          event.target.nextElementSibling.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
          addON = 0;
        }
      }
      */
    }
  });
}

/* MOBILE MENU OPENING */
const lines = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('mega-mobile');
const mobileX = document.getElementById('mobile-x');
console.log(mobileX);

lines.addEventListener('click', function(){
  mobileMenu.style.display = 'flex';
})
mobileX.addEventListener('click', function(){
  console.log('hi');
  mobileMenu.style.display = 'none';
})

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
