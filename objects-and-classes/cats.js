function cats(catsAndNames) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (const catInformation of catsAndNames) {
    const [catName, catAge] = catInformation.split(" ");
    const cat = new Cat(catName, catAge);
    cat.meow();
  }
}
