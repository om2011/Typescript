
// Function without generics
// const addUID = (obj: object) => {
//   let uid = Math.floor(Math.random() * 100);
//   return {...obj, uid};
// }

const addUID = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}


  
let docOne = addUID({name: 'om', age: 22});
  
console.log(docOne.name);
  
  // with interfaces
  interface Resource<T> {
    uid: number;
    resourceName: string;
    data: T;
  }
  
  const docTwo: Resource<object> = {
    uid: 1, 
    resourceName: 'person', 
    data: { name: 'om' }
  };
  
 
  
console.log(docTwo);