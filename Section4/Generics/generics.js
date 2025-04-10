"use strict";
// Function without generics
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'om', age: 22 });
console.log(docOne.name);
const docTwo = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'om' }
};
console.log(docTwo);
