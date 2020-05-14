import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un4Page } from '../Sub Unidad 1/t1-su1-un4/t1-su1-un4';
import { T1Su2Un4Page } from '../Sub Unidad 2/t1-su2-un4/t1-su2-un4';
import { T2Su2Un4Page } from '../Sub Unidad 2/t2-su2-un4/t2-su2-un4';
import { IntU5Page } from '../../Unidad 5/int-u5/int-u5';
import { A1Su1U4Page } from '../../../../Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU1/a1-su1-u4/a1-su1-u4';
import { A1Su2U4Page } from '../../../../Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a1-su2-u4/a1-su2-u4';
import { A2Su2U4Page } from '../../../../Cápsulas (Actividades)/Capsu-U4/Capsu-U4-SU2/a2-su2-u4/a2-su2-u4';
import { PruebaU4Page } from '../../../../Pruebas (Evaluaciones)/prueba-u4/prueba-u4';
import { LogrosU4Page } from '../../../../Logros/logros-u4/logros-u4';

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

  aLogrosU4() {
    this.navCtrl.push(LogrosU4Page)
  }

  /**Unidad 4 Sub Unidad 1*/
  t1_su1_u4() {
    this.navCtrl.push(T1Su1Un4Page);
  }

  /**Cápsula (Actividad) U4-SU1 */
  a1_su1_u4() {
    this.navCtrl.push(A1Su1U4Page);
  }

  /**Unidad 4 Sub Unidad 2*/
  t1_su2_u4() {
    this.navCtrl.push(T1Su2Un4Page);
  }

  t2_su2_u4() {
    this.navCtrl.push(T2Su2Un4Page);
  }

  /**Cápsula (Actividad) U4-SU2 */
  a1_su2_u4() {
    this.navCtrl.push(A1Su2U4Page);
  }

  a2_su2_u4() {
    this.navCtrl.push(A2Su2U4Page);
  }

  aEVA_U4() {
    this.navCtrl.push(PruebaU4Page);
  }

  aintU5() {
    this.navCtrl.setRoot(IntU5Page)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU4Page');
  }

}
