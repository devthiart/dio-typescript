// Generics
function concatArray<T>(...itens: T[]):T[] { // Using 'T' I can set the return type.
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const strArray = concatArray<string[]>(['Felipe', 'Goku'], ['Vegeta']);

// numArray.push('Saitama');

console.log('Array of Numbers: ', numArray);
console.log('Array of Strings: ', strArray);
