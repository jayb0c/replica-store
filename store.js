const collection1 = document.getElementById('collection1');
const collection2 = document.getElementById('collection2');

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
  //The id number changes the entire category of products for the entire site!
  .then(() => {
    let newData = [];
    for (let y = 0; y < data.length; y++){
      if (data[y].category.id === 4) {
        newData.push(data[y]);
      }
    }

//Basically, the API is called and the first carousel gets the first 10 and the second carousel gets the second 10. A new carousel tile is created for each item.
//PRODUCT CAROUSELS HANDLED HERE
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
        collection1.appendChild(prod);
      }
    }
    for (let i = 11; i < 21; i++) {
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
      collection2.appendChild(prod);
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
