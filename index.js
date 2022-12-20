/* MEGA MENU and CART VARIABLES */
const megaMenu = document.getElementById('mega');
const navLinks = document.getElementById('navLinks');
const cartDrawer = document.getElementById('cartDrawer');
const cartIcon = document.getElementById('cartIcon');
const closeCart = document.getElementById('closeCart');

/* IF MEGA MENU IS SCROLLED PAST, CLOSE MENU */
if (window.scrollY > (megaMenu.offsetHeight + megaMenu.offsetTop)) {
  megaMenu.className = "mega-menu hide";
}
/* MEGA MENU OPENS WHEN 'SHOP' IS HOVERED */
navLinks.addEventListener('mouseover', function(event){
  if (event.target.className === 'link desk-only' || event.target === megaMenu) {
    megaMenu.className = "mega-menu show";
  } else{
    megaMenu.className = "mega-menu hide";
  }
})
/* MEGA MENU CLOSES WHEN MOUSE LEAVES MENU */
megaMenu.addEventListener('mouseout', function(event){
  megaMenu.className = "mega-menu hide";
})
/* MEGA MENU REMAINS OPEN WHEN CURSOR IS OVER IT */
megaMenu.addEventListener('mouseover', function (event) {
  megaMenu.className = "mega-menu show";
})
/* CLICKING THE CART ICON OPENS THE CART DRAWER */
navLinks.addEventListener('click', function (event) {
  if (event.target === cartIcon) {
    cartDrawer.style.display = 'flex';
  }
})
/* IF THE 'X' IS CLICKED IN THE CART, THE CART CLOSES */
cartDrawer.addEventListener('click', function (event){
  if(event.target === closeCart) {
    cartDrawer.style.display = 'none';
  }
})

/* FIRST AND SECOND COLLECTION CAROUSELS */
const firstCollection = document.getElementById('collectionFirst');
const secondCollection = document.getElementById('collectionSecond');

/* CAROUSEL EVENT LISTENERS ARE APPLIED TO BOTH COLLECTION CAROUSELS SEPARATELY */
scrollCarousel(firstCollection, '1');
scrollCarousel(secondCollection, '2');


/* THIS FUNCTION RESPONDS TO CAROUSEL CLICKS. IT BEGINS AT THE BEGINNING OF THE SCROLLBAR AND EACH CLICK IS SAVED IN A VARIABLE WHICH INCREASES. IF THE FULL LENGTH OF THE SCROLL BAR HAS BEEN REACHED, THE CAROUSEL SETS BACK TO THE BEGINNING WITH A CSS ANIMATION */

function scrollCarousel (clickedCarousel, num){
  let forwardScroll = 0;
  let collectionCarousel = document.getElementById('collection' + num);

  clickedCarousel.addEventListener('click', function (event) {
    let carouselLength = collectionCarousel.scrollWidth;
    let carouselViewport = collectionCarousel.offsetWidth;
    let scrollLocation = carouselViewport + forwardScroll;
    let carouselSlideSize = collectionCarousel.firstElementChild.offsetWidth;

    if (scrollLocation > carouselLength - carouselSlideSize){
      collectionCarousel.classList.add('wrap1');
      collectionCarousel.scrollTo(0,0);

      /* FOR BEST RESULTS, MAKE SURE THAT THE CSS CLASSES wrap1 AND wrap2 HAVE TRANSITIONS ARE LONGER THAN THE TIMEOUT TO PREVENT A GAP BETWEEN THEM. */
      setTimeout(function () {
        collectionCarousel.classList.add('wrap2');
      }, 300);
      forwardScroll = 0;
    } else{
      collectionCarousel.classList.remove('wrap2');
      collectionCarousel.classList.remove('wrap1');
      if (event.target.className === 'bookend-r') {
        event.target.previousElementSibling.scrollTo({
          top: 0,
          left: scrollLocation,
          behavior: 'smooth'
        });
        if (scrollLocation <= collectionCarousel.scrollWidth) { forwardScroll = scrollLocation; };
      }
    }
  });
}

/* MOBILE MENU OPENING */
const hamburgerIcon = document.getElementById('mobile-menu');
const mobileMenu = document.getElementById('mega-mobile');
const mobileCloseCart = document.getElementById('mobile-x');
const page = document.getElementsByTagName('body')[0];

/* WHEN THE MOBILE HAMBURGER MENU IS CLICKED, THE MOBILE MENU IS DISPLAYED FULLSCREEN */
hamburgerIcon.addEventListener('click', function(){
  mobileMenu.style.display = 'flex';
  page.style.position = 'fixed';
  page.style.top = 0;
})

/* THE MOBILE CART CAN BE CLOSED BY CLICKING THE 'X' ICON */
mobileCloseCart.addEventListener('click', function(){
  mobileMenu.style.display = 'none';
  page.style.position = 'relative';
  page.style.top = 'none';
})



/* THESE ARE THE VIEWPORTS OF EACH COLLECTION CAROUSEL */
const firstCollectionViewport = document.getElementById('collection1');
const secondCollectionViewport = document.getElementById('collection2');

const getProducts = new XMLHttpRequest();
getProducts.open('GET', 'https://api.escuelajs.co/api/v1/products');
getProducts.send();
getProducts.onload = function () {
  data = JSON.parse(getProducts.response);
}

var obj;
fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then(data => {
    obj = data;
  })

  /* CATEGORY ID 4 IS THE SHOES CATEGORY, THE ENTIRE SITE CATEGORY CAN BE CHANGED WITH THIS NUMBER */
  .then(() => {
    let newData = [];
    for (let y = 0; y < data.length; y++){
      if (data[y].category.id === 4) {
        newData.push(data[y]);
      }
    }

    /* THE API IS CALLED AND THE FIRST 11 PRODUCTS OF THE SHOE COLLECTION ARE LOADED INTO THE FIRST COLLECTION CAROUSEL */
    for (let i = 0; i < 11; i++) {
      if (newData[i].images != '') {
      let prod = document.createElement('div');
      prod.className = 'slide';
        prod.style.backgroundImage = 'url(' + newData[i].images + ')';
        let cover = document.createElement('div');
        cover.className = 'slide-cover';
        let span = document.createElement('span');
        span.textContent = '$' + newData[i].price;
        span.className = 'cover-copy';
        cover.appendChild(span);
        prod.appendChild(cover);
        firstCollectionViewport.appendChild(prod);
      }
    }

    /* THE API IS CALLED AND THE NEXT 11 PRODUCTS OF THE SHOE COLLECTION ARE LOADED INTO THE SECOND COLLECTION CAROUSEL */
    for (let i = 11; i < 22; i++) {
      if (newData[i].images != '') {
      let prod = document.createElement('div');
      prod.className = 'slide';
        prod.style.backgroundImage = 'url(' + newData[i].images + ')';
      let cover = document.createElement('div');
      cover.className = 'slide-cover';
      let span = document.createElement('span');
      span.textContent = '$' + newData[i].price;
       span.className = 'cover-copy';
      cover.appendChild(span);
      prod.appendChild(cover);
      secondCollectionViewport.appendChild(prod);
      }
    }
  });

  //FEATURED PRODUCT API CALL
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(res => res.json())
    .then(data => {
      obj = data;
    })
    .then(() => {
      let thisData = [];
      for (let y = 0; y < data.length; y++) {
        if (data[y].category.id === 4) {
          thisData.push(data[y]);
        }
      }

      /* THE FEATURED PRODUCT SECTION HAS A SINGLE PRODUCT PULLED AND THE SECTION'S CONTENT IS POPULATED FROM THIS PRODUCT'S DATA. */
      let featuredImage = document.getElementById('image-block');
      let featuredCopy = document.getElementById('copy-block');

      let featuredHeader = document.createElement('h2');
      featuredHeader.textContent = 'Speed Run 2';
      let featuredPrice = document.createElement('h4');
      featuredPrice.textContent = '$' + thisData[30].price;
      let featuredBody = document.createElement('p');
      featuredBody.textContent = 'The Speed Run 2 has the same supersoft feel that lets you feel the potential when your foot hits the pavement. We created the shoe with plenty of snappy responsiveness and incredible support to help keep you feeling secure and competitive. Its 1 of our most tested shoes, still designed for you to stay on the track and away from the sidelines.';
      let featuredButton = document.createElement('button');
      featuredButton.className = 'button';
      featuredButton.textContent = 'Add to Cart';

      featuredCopy.appendChild(featuredHeader);
      featuredCopy.appendChild(featuredPrice);
      featuredCopy.appendChild(featuredBody);
      featuredCopy.appendChild(featuredButton);
    });
