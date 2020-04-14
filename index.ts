// class , Object, OOP

// -> create an animal
// * I just want add some new functions
class Animal {
  protected name: string; // * now the child class can access to the property
  constructor(name) {
    this.name = name;
  }
  run() {
    return "the animal is running ";
  }
}

const cat = new Animal("hello catty");
console.log(cat.name); // * name is protected, not access to it.
console.log(cat.run());

// -> extends the animal
class Dog extends Animal {
  // !! extends, there is no need to do another constructor
  bark() {
    console.log("dog is barking ...");
  }
}

const dog = new Dog("xiao bao");
dog.bark();

// -> restart and thing
// * now we need another constructor
class Human_A extends Animal {
  humanGender: string;
  constructor(humanGender, name) {
    super(name);
    this.name = name;
    this.humanGender = humanGender;
  }
  giveGender() {
    console.log(this.name, this.humanGender);
  }
}

// -> now we want make the value private
class Human_B extends Animal {
  private humanGender: string; // * now you cannot access to the gender
  constructor(humanGender, name) {
    super(name);
    this.name = name;
    this.humanGender = humanGender;
  }
  private thisIsAnPrivateFunction() {
    console.log("this is an private function");
  }
  giveGender() {
    console.log(this.name, this.humanGender);
  }
}

// -> read only: you can read it, but not change is
class Human_C extends Animal {
  readonly humanGender: string; // * now you cannot access to the gender
  publicValue: string;
  constructor(humanGender, name) {
    super(name);
    this.name = name;
    this.humanGender = humanGender;
  }
  private thisIsAnPrivateFunction() {
    console.log("this is an private function");
  }
  giveGender() {
    console.log(this.name, this.humanGender);
  }
}

const human_c = new Human_C("human c", "female");
human_c.publicValue = "new value"; // * public
human_c.humanGender = "new value"; // * read only

// -> static for the class
// * I think i am pretty good at it .
// * static can be a value or a function

