// Interfaces (type x interface)

// Types -> More used when we are going to create a type.
type robot = {
  readonly id: number | string;
  name: string;
}

const bot1: robot = {
  id: 1,
  name: 'Bot011',
}

// I can't change the ID because it is readonly.
// bot1.id = 2;
bot1.name = 'Bot01';

console.log(bot1);

// Interface -> More used when we are going to work with class.
interface irobot {
  readonly id: number | string;
  name: string;
  sayHello(): string;
}

class Android implements irobot {
  id: string | number;
  name: string;
  
  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(): string {
    return `Hello! My name is ${this.name}!`;
  }
}

const android = new Android(3, 'Android 01');
console.log(android.sayHello());

// You can use interface with variables, but in this case it is more recommended to use type.
const bot2: irobot = {
  id: 2,
  name: 'Bot02',
  sayHello: () => {return 'Hello!'}
}

console.log(bot2);
