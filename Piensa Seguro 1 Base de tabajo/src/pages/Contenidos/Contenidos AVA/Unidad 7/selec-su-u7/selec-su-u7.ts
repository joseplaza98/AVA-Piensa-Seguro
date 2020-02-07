import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un7Page } from '../Sub Unidad 1/t1-su1-un7/t1-su1-un7';
import { T1Su2Un7Page } from '../Sub Unidad 2/t1-su2-un7/t1-su2-un7';
import { T2Su2U7Page } from '../Sub Unidad 2/t2-su2-u7/t2-su2-u7';

/**
 * Generated class for the SelecSuU7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u7',
  templateUrl: 'selec-su-u7.html',
})
export class SelecSuU7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU7Page');
  }

  /**Unidad 7 Sub Unidad 1 */
  t1_su1_u7() {
    this.navCtrl.push(T1Su1Un7Page);
  }

  /**Unidad 7 Sub Unidad 2 */
  t1_su2_u7() {
    this.navCtrl.push(T1Su2Un7Page);
  }

  t2_su2_u7() {
    this.navCtrl.push(T2Su2U7Page);
  }

}
