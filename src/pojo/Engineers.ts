import { Employee } from './Employee';

export class Engineers extends Employee {
  public language: string;

  constructor() {
    super();
  }

  setLanguage(lang) {
    this.language = lang;
  }

  getLanguage() {
    return this.language;
  }

  setToString() {
    return super.setToString() + " , " + this.language;
  }
}
