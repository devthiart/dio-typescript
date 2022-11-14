"use strict";
let data = ['Felipe', 'Ana', 'Adriana'];
let data2 = ['Felipe', 'Ana', 'Adriana'];
let stringAndNumbers = ['Felipe', 30, 'Ana', 28];
let bill = ['water bill', 199.99, 123456789];
let testArrayMethods = [1, 2, 3, 4, 5];
console.log('Array values: ', testArrayMethods);
console.log('Array length: ', testArrayMethods.length);
console.log('\n*** MAP ***');
let arrayAfterMap = testArrayMethods.map((currentValue) => {
    return currentValue + 1;
});
console.log('Increment values: ', arrayAfterMap);
console.log('\n*** REDUCE ***');
let sumAllArrayItems = testArrayMethods.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
});
console.log('Summing all array items: ', sumAllArrayItems);
console.log('\n*** FILTER ***');
let arrayAfterFilter = testArrayMethods.filter((currentValue) => {
    if (currentValue !== 2) {
        return currentValue;
    }
    return;
});
console.log('Remove number 2: ', arrayAfterFilter);
console.log('\n*** POP ***');
testArrayMethods.pop();
console.log('Array after pop:', testArrayMethods);
console.log('Pop remove the last element.');
