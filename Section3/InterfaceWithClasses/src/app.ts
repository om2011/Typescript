import { invoice } from './classes/invoice.js';
import { payment } from './classes/payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';




let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne=new invoice('om','web work',2000)
docTwo=new payment('om','web2 work',5000)

let doc:HasFormatter[]=[];
doc.push(docOne);
doc.push(docTwo);

console.log(doc)




const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc:HasFormatter;
  if(type.value==='invoice'){
    doc=new invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else{
    doc=new payment(tofrom.value,details.value,amount.valueAsNumber);
  }

  console.log(doc);
});