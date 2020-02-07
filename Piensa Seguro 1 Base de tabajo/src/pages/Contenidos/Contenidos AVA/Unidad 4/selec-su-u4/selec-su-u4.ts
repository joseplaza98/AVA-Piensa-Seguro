import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un4Page } from '../Sub Unidad 1/t1-su1-un4/t1-su1-un4';
import { T2Su1Un4Page } from '../Sub Unidad 1/t2-su1-un4/t2-su1-un4';
import { T1Su2Un4Page } from '../Sub Unidad 2/t1-su2-un4/t1-su2-un4';
import { T3Su2Un4Page } from '../Sub Unidad 2/t3-su2-un4/t3-su2-un4';
import { T2Su2Un4Page } from '../Sub Unidad 2/t2-su2-un4/t2-su2-un4';

/**
 * Generated class for the SelecSuU4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u4',
  templateUrl: 'selec-su-u4.html',
})
export class SelecSuU4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU4Page');
  }

  /**Unidad 4 Sub Unidad 1*/
  t1_su1_u4() {
    this.navCtrl.push(T1Su1Un4Page);
  }

  t2_su1_u4() {
    this.navCtrl.push(T2Su1Un4Page);
  }

  /**Unidad 4 Sub Unidad 2*/
  t1_su2_u4() {
    this.navCtrl.push(T1Su2Un4Page);
  }

  t2_su2_u4() {
    this.navCtrl.push(T2Su2Un4Page);
  }

  t3_su2_u4() {
    this.navCtrl.push(T3Su2Un4Page);
  }
}
