import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { IntU6Page } from '../../Unidad 6/int-u6/int-u6';
import { A1Su1U5Page } from '../../../../Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a1-su1-u5/a1-su1-u5';
import { A2Su1U5Page } from '../../../../Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU1/a2-su1-u5/a2-su1-u5';
import { A1Su2U5Page } from '../../../../Cápsulas (Actividades)/Capsu-U5/Capsu-U5-SU2/a1-su2-u5/a1-su2-u5';
import { PruebaU5Page } from '../../../../Pruebas (Evaluaciones)/prueba-u5/prueba-u5';
import { T1Su1U5Page } from '../Sub Unidad 1/t1-su1-u5/t1-su1-u5';
import { T2Su1U5Page } from '../Sub Unidad 1/t2-su1-u5/t2-su1-u5';
import { T3Su1U5Page } from '../Sub Unidad 1/t3-su1-u5/t3-su1-u5';
import { T1Su2U5Page } from '../Sub Unidad 2/t1-su2-u5/t1-su2-u5';
import { T2Su2U5Page } from '../Sub Unidad 2/t2-su2-u5/t2-su2-u5';

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
    this.navCtrl.push(T1Su1U5Page);
  }

  t2_su1_u5() {
    this.navCtrl.push(T2Su1U5Page);
  }

  t3_su1_u5() {
    this.navCtrl.push(T3Su1U5Page);
  }

  /**Cápsula (Actividad) U5-SU2 */
  a1_su1_u5() {
    this.navCtrl.push(A1Su1U5Page);
  }

  a2_su1_u5() {
    this.navCtrl.push(A2Su1U5Page);
  }

  /**Unidad 5 Sub Unidad 2 */
  t1_su2_u5() {
    this.navCtrl.push(T1Su2U5Page);
  }

  t2_su2_u5() {
    this.navCtrl.push(T2Su2U5Page);
  }

  /**Cápsula (Actividad) U5-SU2 */
  a1_su2_u5() {
    this.navCtrl.push(A1Su2U5Page);
  }

  aEVA_U5() {
    this.navCtrl.setRoot(PruebaU5Page);
  }

  aintU6() {
    this.navCtrl.setRoot(IntU6Page)
  }

}
