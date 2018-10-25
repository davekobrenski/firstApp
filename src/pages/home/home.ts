import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";
import { ThirdPage } from '../third/third';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  foo = 'Davies First App';
  bar = 'Hello Davie';
  instruct = 'Enter two numbers to add together.';

  tab1: any;
  tab2: any;

  rootPage = SecondPage;

  a = "5";
  b = "6";
  result = 11;

  myArray = ['Abner', 'Merle', 'Tiny Guy'];

  constructor(public navCtrl: NavController) {
    this.tab1 = SecondPage;
    this.tab2 = ThirdPage;
  }

  getText() {
    return this.instruct;
  }

  calculate() {
    this.result = parseInt(this.a) + parseInt(this.b);
  }

  openSecondPage() {
    //this.navCtrl.push(SecondPage, {name: 'Dave', age:'44'});
    this.rootPage = SecondPage;
  }

  openThirdPage() {
    this.navCtrl.push(ThirdPage);
    //this.rootPage = ThirdPage;
  }

}
