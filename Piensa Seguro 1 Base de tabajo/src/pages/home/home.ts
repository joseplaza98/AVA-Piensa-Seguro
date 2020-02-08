import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IntU1Page } from '../Contenidos/Contenidos AVA/Unidad 1/int-u1/int-u1';
import { IntU2Page } from '../Contenidos/Contenidos AVA/Unidad 2/int-u2/int-u2';
import { IntU3Page } from '../Contenidos/Contenidos AVA/Unidad 3/int-u3/int-u3';
import { IntU4Page } from '../Contenidos/Contenidos AVA/Unidad 4/int-u4/int-u4';
import { IntU5Page } from '../Contenidos/Contenidos AVA/Unidad 5/int-u5/int-u5';
import { IntU6Page } from '../Contenidos/Contenidos AVA/Unidad 6/int-u6/int-u6';
import { IntU7Page } from '../Contenidos/Contenidos AVA/Unidad 7/int-u7/int-u7';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  aInt_U1() {
    this.navCtrl.push(IntU1Page);
  }

  aInt_U2() {
    this.navCtrl.push(IntU2Page);
  }

  aInt_U3() {
    this.navCtrl.push(IntU3Page);
  }

  aInt_U4() {
    this.navCtrl.push(IntU4Page);
  }

  aInt_U5() {
    this.navCtrl.push(IntU5Page);
  }

  aInt_U6() {
    this.navCtrl.push(IntU6Page);
  }

  aInt_U7() {
    this.navCtrl.push(IntU7Page);
  }

}
