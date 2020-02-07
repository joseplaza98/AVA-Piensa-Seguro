import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogrosU1Page } from '../logros-u1/logros-u1';
import { LogrosU2Page } from '../logros-u2/logros-u2';
import { LogrosU3Page } from '../logros-u3/logros-u3';
import { LogrosU4Page } from '../logros-u4/logros-u4';
import { LogrosU5Page } from '../logros-u5/logros-u5';
import { LogrosU6Page } from '../logros-u6/logros-u6';
import { LogrosU7Page } from '../logros-u7/logros-u7';

/**
 * Generated class for the InsigniasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insignias',
  templateUrl: 'insignias.html',
})
export class InsigniasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsigniasPage');
  }

  aLogros_u1() {
    this.navCtrl.push(LogrosU1Page);
  }

  aLogros_u2() {
    this.navCtrl.push(LogrosU2Page);
  }

  aLogros_u3() {
    this.navCtrl.push(LogrosU3Page);
  }

  aLogros_u4() {
    this.navCtrl.push(LogrosU4Page);
  }

  aLogros_u5() {
    this.navCtrl.push(LogrosU5Page);
  }

  aLogros_u6() {
    this.navCtrl.push(LogrosU6Page);
  }

  aLogros_u7() {
    this.navCtrl.push(LogrosU7Page);
  }


}
