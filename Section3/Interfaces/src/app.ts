import { invoice } from './classes/invoice.js';


interface IsPerson{
  name:string
  age:number
  speak(a:string):void
  spend(a:number):number
}

const me:IsPerson={
  name:'om',
  age:22,
  speak(text:string):void{
    console.log(text)
  },
  spend(amount:number):number{
    return amount;
  }
}
console.log(me)
me.speak('hello, world');

const greetPerson = (person: IsPerson): void => {
  console.log('hello ', person.name);
}

greetPerson(me);

const invOne = new invoice('om', 'work on the xyz website', 250);
const invTwo = new invoice('om', 'work on the abc website', 300);


let invoices: invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});