import {
  incrementQty,
  decrementQty,
  recalculateSubtotal
} from './helpers.js';

const incrButton = document.querySelector('#incr');
const decrButton = document.querySelector('#decr');
const price = document.querySelector('#price');
const subTotal = document.querySelector('#subtotal');
const qtyInput = document.querySelector('#qty');
const code = document.querySelector('#code');
const confirmCodeBtn = document.querySelector('#okeCode');
let discount = 0;

incrButton.addEventListener('click', () => {
  qtyInput.value = incrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

decrButton.addEventListener('click', () => {
  qtyInput.value = decrementQty(qtyInput.value);
  subTotal.textContent = `Rp. ${recalculateSubtotal(
    price.value, 
    qty.value,
    discount
    )}`;
});

confirmCodeBtn.addEventListener("click", () => {
  if (code.value === "25PERSEN") {
    discount = 25;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "30PERSEN") {
    discount = 30;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "50PERSEN") {
    discount = 50;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "60PERSEN") {
    discount = 60;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "70PERSEN") {
    discount = 70;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else if (code.value === "75PERSEN") {
    discount = 75;
    subTotal.textContent = `Rp. ${recalculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  } else {
    discount = 0;
    subTotal.textContent = `Rp. ${reclculateSubtotal(
      price.value, 
      qty.value,
      discount
    )}`;
  }
});


