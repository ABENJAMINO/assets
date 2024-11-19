// Select all required elements
const plusButtons = document.querySelectorAll('.fa-plus-circle');
const minusButtons = document.querySelectorAll('.fa-minus-circle');
const deleteButtons = document.querySelectorAll('.fa-trash-alt');
const likeButtons = document.querySelectorAll('.fa-heart');
const totalPriceElement = document.querySelector('.total');

// Update the total price
function updateTotal() {
  const productCards = document.querySelectorAll('.card-body');
  let total = 0;
  productCards.forEach(card => {
    const unitPrice = parseInt(card.querySelector('.unit-price').textContent);
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    total += unitPrice * quantity;
  });
  totalPriceElement.textContent = `${total} $`;
}

// Handle "+" button click
plusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });
});

// Handle "-" button click
minusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });
});

// Handle delete button click
deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.closest('.card-body');
    productCard.remove();
    updateTotal();
  });
});

// Handle like button click
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.style.color = button.style.color === 'red' ? 'black' : 'red';
  });
});

// Initialize the total price
updateTotal();
