export class Employee {
  public name: string;
  public gender: string;

  constructor() {

  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setGender(gender) {
    this.gender = gender;
  }

  getGender() {
    return this.gender;
  }

  setToString() {
    return this.name + " , " + this.gender;
  }

}
