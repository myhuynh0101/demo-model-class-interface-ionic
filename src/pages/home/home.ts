import { MathProvider } from './../../providers/math/math';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  param1: number;
  param2: number;

  value: any;
  id: any;

  constructor(
    public navCtrl: NavController,
    public math: MathProvider
  ) {

  }

  promiseTest(a: number, b: number) {
    this.math.getPromise(a, b).then( data => {
      alert("Success : " + data);
    }).catch( err => {
      alert("Error is : " + err);
    })
  }

  promiseRace() {
    this.math.testRace();
  }

  start() {
    this.id = this.math.getTick().subscribe(data => {
      this.value = data;
    })
  }

  stop() {
    this.id.unsubscribe();
    this.math.stopTimer();
  }

}
