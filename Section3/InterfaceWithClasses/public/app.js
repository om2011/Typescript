import { invoice } from './classes/invoice.js';
import { payment } from './classes/payments.js';
let docOne;
let docTwo;
docOne = new invoice('om', 'web work', 2000);
docTwo = new payment('om', 'web2 work', 5000);
let doc = [];
doc.push(docOne);
doc.push(docTwo);
console.log(doc);
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
