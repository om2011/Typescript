import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplet.js';
import { payment } from './classes/payments.js';
import { HasFormatter } from './Interfaces/HasFormatter.js';


const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


const ul=document.querySelector('ul')!;
const list=new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc:HasFormatter;
  if(type.value==='invoice'){
    doc=new invoice(tofrom.value,details.value,amount.valueAsNumber);
  }else{
    doc=new payment(tofrom.value,details.value,amount.valueAsNumber);
  }

 
  list.render(doc,type.value,'end')
});