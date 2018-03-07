import { Holder } from './../interfaces/Holders';

export class GreenCard implements Holder {
  name: string;
  greenCard : boolean;
  country: string;
  display() {
    console.log("Green Card : " + this.name + " , " + this.greenCard + " , " + this.country);
  }
}
