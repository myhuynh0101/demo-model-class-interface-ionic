import { Holder } from './../interfaces/Holders';

export class VisaHolders implements Holder {
  name: string;
  greenCard: boolean;
  display() {
    console.log("VisaHolders : " + this.name + " , " + this.greenCard);
  }

}
