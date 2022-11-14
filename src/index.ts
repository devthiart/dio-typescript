type hero = {
  name: string;
  heroName: string;
}

function printObject(people: hero) {
  console.log(people);
}
console.log("Hello World!!");

printObject({name: "Peter Parker", heroName: "Spider Man" });
