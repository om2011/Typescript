type strornum=string|number;

const add = (a: number, b: number, c: strornum = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, 'ninja');

