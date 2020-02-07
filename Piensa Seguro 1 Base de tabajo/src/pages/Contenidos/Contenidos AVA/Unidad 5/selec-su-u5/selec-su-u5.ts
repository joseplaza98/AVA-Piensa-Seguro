import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un5Page } from '../Sub Unidad 1/t1-su1-un5/t1-su1-un5';
import { T2Su1Un5Page } from '../Sub Unidad 2/t2-su1-un5/t2-su1-un5';
import { T1Su2Un5Page } from '../Sub Unidad 1/t1-su2-un5/t1-su2-un5';

/**
 * Generated class for the SelecSuU5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u5',
  templateUrl: 'selec-su-u5.html',
})
export class SelecSuU5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU5Page');
  }

  /**Unidad 5 Sub Unidad 1 */
  t1_su1_u5() {
    this.navCtrl.push(T1Su1Un5Page);
  }

  t2_su1_u5() {
    this.navCtrl.push(T2Su1Un5Page);
  }

  /**Unidad 5 Sub Unidad 2 */
  t1_su2_u5() {
    this.navCtrl.push(T1Su2Un5Page);
  }
}
