// Two ways to declare a array
let data: string[] = ['Felipe', 'Ana', 'Adriana']; // String array
let data2: Array<string> = ['Felipe', 'Ana', 'Adriana']; // String array

// Multiple types
let stringAndNumbers: (string | number)[] = ['Felipe', 30, 'Ana', 28]

// Tuple -> determine the order of types
let bill: [string, number, number] = ['water bill', 199.99, 123456789];
// let bill2: [string, number, number] = [ 199.99, 123456789, 'energy bill' ]; //Wrong order

// ***** ARRAY METHODS *****

// the same JavaScript methods are used in TypeScript

let testArrayMethods: number[] = [1, 2, 3, 4, 5];

console.log('Array values: ', testArrayMethods);

console.log('Array length: ', testArrayMethods.length);

// Map
console.log('\n*** MAP ***');
let arrayAfterMap:number[] = testArrayMethods.map(
  (currentValue) => {
    return currentValue + 1;
  }
);
console.log('Increment values: ', arrayAfterMap);

// Reduce
console.log('\n*** REDUCE ***');
let sumAllArrayItems:number = testArrayMethods.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue
  }
);
console.log('Summing all array items: ', sumAllArrayItems);

// Filter
console.log('\n*** FILTER ***');
let arrayAfterFilter:number[] = testArrayMethods.filter(
  (currentValue) => {
    if(currentValue !== 2) {
      return currentValue;
    }
    return;
  }
);
console.log('Remove number 2: ', arrayAfterFilter);

// Pop
console.log('\n*** POP ***')
testArrayMethods.pop()
console.log('Array after pop:', testArrayMethods);
console.log('Pop remove the last element.');