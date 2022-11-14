// Decorators -> https://www.typescriptlang.org/docs/handbook/decorators.html
function ShowName(target: any) {
  console.log(target);
}

// Class Decorator
// This function will be executed when the Employee class will be created
@ShowName
class Employee {}

// Function add to Class (Class Decorator) 
function apiVersion(version: string) {
  return (target: any) => {
    // Get target when run the function and add property '__version'.
    Object.assign(target.prototype, {__version: version})
  }
}

// Function add to Attribute (Attribute Decorator)
function minLength(length: number) {
  return (target: any, key: string) => {
    console.log('Target: ', target);
    console.log('Key: ', target[key]);
    let _value = target[key];

    const getter = () => {
      return _value;
    }

    const setter = (value: string) => {
      if(value.length < length) {
        throw new Error(`The API name cannot be less than ${length}.`)
      } else {
        _value = value;
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
    });
  };
}

// Class Decorator
@apiVersion('1.10')
class Api {
  // Attribute Decorator
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api('API-42');
console.log('Version: ', api.__version); // This only run using 'ts-node-dev' build.
