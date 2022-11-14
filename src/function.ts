function sumNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

let sum: number = sumNumbers(4, 7);
console.log(sum);

function addHello(name: string): string {
  return `Hello ${name}!`;
}
console.log(addHello('Thiago'));

// Multiple Types
// function CallToPhone(phone: number | string): any {
function CallToPhone(phone: number | string): number | string {
  return phone;
}
console.log('String phone: ', CallToPhone('111222333'));
console.log('Number phone: ', CallToPhone(111222333));

// Async function
async function getDatabase(id: number): Promise<string> {
  return "Thiago";
}
