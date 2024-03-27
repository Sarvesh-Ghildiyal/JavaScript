class Person {
  name;

  constructor(name) {
    this.name = name;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}`);
  }
}

const Ben = new Person("Ben");
Ben.introduceSelf();

///////////////////////////////////////////////////////

class Animal {
  sleep() {
    console.log("zzzzzzz");
  }
  constructor(name) {
    this.name = name;
  }
  introduceSelf() {
    console.log(this.name);
  }
}

const spot = new Animal("hi");

spot.sleep(); // 'zzzzzzz'
spot.introduceSelf();
