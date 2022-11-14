"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const strArray = concatArray(['Felipe', 'Goku'], ['Vegeta']);
console.log('Array of Numbers: ', numArray);
console.log('Array of Strings: ', strArray);
