const collection1 = document.getElementById('collection1');
const collection2 = document.getElementById('collection2');

const getProducts = new XMLHttpRequest();
getProducts.open('GET', 'https://api.escuelajs.co/api/v1/products');
getProducts.send();
getProducts.onload = function () {
  data = JSON.parse(getProducts.response);
  console.log(data);
}

var obj;
fetch('https://api.escuelajs.co/api/v1/products')
  .then(res => res.json())
  .then(data => {
    obj = data;
  })
  .then(() => {
    for (let i = 0; i < 10; i++) {
      if (data[i].images != '') {
      let prod = document.createElement('div');
      prod.className = 'slide';
      prod.style.backgroundImage = 'url(' + data[i].images + ')';
        let cover = document.createElement('div');
        cover.className = 'slide-cover';
        prod.appendChild(cover);
        collection1.appendChild(prod);
      }
    }
    for (let i = 11; i < 20; i++) {
      if (data[i].images != '') {
      let prod = document.createElement('div');
      prod.className = 'slide';
      prod.style.backgroundImage = 'url(' + data[i].images + ')';
      let cover = document.createElement('div');
      cover.className = 'slide-cover';
      prod.appendChild(cover);
      collection2.appendChild(prod);
      }
    }
  });

  //test repo name change
