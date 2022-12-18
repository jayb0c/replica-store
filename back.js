fetch('https://fakestoreapi.com/products/categories')
  .then(res => res.json())
  .then(json => console.log(json))


fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => console.log(json))
