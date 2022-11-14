class Character {
  readonly name?: string; // optional.
  public strength: number;
  public  skill: number;

  //Data modified
  public publicProp?: string; // Accessed for everyone.
  private privateProp?: string; // Accessed only by this class.
  protected protectedProp?: string; // Accessed only by this class and child classes.

  constructor(name: string, strength: number, skill: number) {
    this.name = name;
    this.strength = strength;
    this.skill = skill;
  }

  public attack(): void {
    console.log(`Attach with ${this.strength} points`);
  }

  protected incrementSkill(increment: number): void {
    this.skill += increment;
  }
}

const c1 = new Character('Bulbasaur', 10, 98);
console.log(c1);

class Magician extends Character {
  public magicPoints: number;
  constructor(name: string, strength: number, skill: number, magicPoints: number) {
    super(name, strength, skill);
    this.magicPoints = magicPoints;
  }
}

const c2 = new Magician('Mage', 5, 30, 100);
console.log(c2);
