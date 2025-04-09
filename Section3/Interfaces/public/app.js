import { invoice } from './classes/invoice.js';
const me = {
    name: 'om',
    age: 22,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    }
};
console.log(me);
me.speak('hello, world');
const greetPerson = (person) => {
    console.log('hello ', person.name);
};
greetPerson(me);
const invOne = new invoice('om', 'work on the xyz website', 250);
const invTwo = new invoice('om', 'work on the abc website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
