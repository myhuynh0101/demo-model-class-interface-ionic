import { GreenCard } from './../../pojo/GreenCard';
import { VisaHolders } from './../../pojo/VisaHolder';
import { Holder } from './../../interfaces/Holders';
import { Engineers } from './../../pojo/Engineers';
import { Employee } from './../../pojo/Employee';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    // let em = new Employee();
    // em.setName('tony');
    // em.setGender('male');
    // console.log("Data is: " + em.setToString());

    // let eng = new Engineers();
    // eng.setName('huynh');
    // eng.setGender('male');
    // eng.setLanguage('English');
    // console.log("Engineers Data :" + eng.setToString());

    // let holder: Holder;
    // holder = {
    //   name: "tony",
    //   greenCard: true,
    //   display() {
    //     console.log("From Interface " + this.name + " , " + this.greenCard);
    //   }
    // };

    // console.log("Interface Details: " + holder.name + " , " + holder.greenCard);
    // holder.display();

    let visa = new VisaHolders();
    visa.name = 'tony';
    visa.greenCard = true;
    visa.display();

    let inter: Holder;
    inter = visa;
    inter.display();

    let gree = new GreenCard();
    gree.name = 'huynh';
    gree.greenCard = false;
    gree.country = 'USA';
    gree.display();

  }

}
