// ITERATION 1

function updateSubtotal(product) {
  alert('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').valueAsNumber;
  const subtotal = price * quantity;
  product.querySelector('.subtotal span').innerText = subtotal;
  //... your code goes here
}

function calculateAll() {
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // ITERATION 2
  const allProducts = document.getElementsByClassName('.product');
  for (let product of products) {
    updateSubtotal(allProducts);
  }
  //... your code goes here
  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
