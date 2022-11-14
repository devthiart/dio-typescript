let untypedObject: object = {
  name: 'João',
  address: 'Rua Brasil, N 100',
  city: 'São Paulo'
}
console.log(untypedObject);

// I can edit and lose information.
untypedObject = { id: 1 }
console.log(untypedObject);

// Creating a type object
type Product = {
  name: string;
  price: number;
  description: string;
  units: number;
}

let typedObject:Product = {
  name: 'Shoes',
  price: 89.99,
  description: 'A white shoes.',
  units: 10,
}

// I cannot edit add unknown properties.
// typedObject = { colorRed: '#FF0000' }
