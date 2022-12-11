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
    for (let i = 0; i < 10; i++) {
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
    for (let i = 11; i < 20; i++) {
      if (newData[i].images != '') {
      let prod = document.createElement('div');
      prod.className = 'slide';
        prod.style.backgroundImage = 'url(' + newData[i].images + ')';
      let cover = document.createElement('div');
      cover.className = 'slide-cover';
      cover.textContent ='hello world';
      prod.appendChild(cover);
      collection2.appendChild(prod);
      }
    }
  });

  //test repo name change