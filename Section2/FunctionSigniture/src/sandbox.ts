

// Function Signiture
let greet: (a: string, b: string) => void;
// Functtion Implementation according to signiture
greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
}


let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add') {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
}


let logDetails: (obj: {name: string, age: number}) => void;

logDetails = (ninja: {name: string, age: number}) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
}