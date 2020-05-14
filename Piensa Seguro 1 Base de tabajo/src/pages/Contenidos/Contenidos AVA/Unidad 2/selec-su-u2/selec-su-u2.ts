import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**SUb Unidad 1 */
import { T1Su1U2Page } from '../Sub Unidad 1/t1-su1-u2/t1-su1-u2';
import { T2Su1U2Page } from '../Sub Unidad 1/t2-su1-u2/t2-su1-u2';
import { T3Su1U2Page } from '../Sub Unidad 1/t3-su1-u2/t3-su1-u2';
import { T4Su1U2Page } from '../Sub Unidad 1/t4-su1-u2/t4-su1-u2';
import { T5Su1U2Page } from '../Sub Unidad 1/t5-su1-u2/t5-su1-u2';
import { T6Su1U2Page } from '../Sub Unidad 1/t6-su1-u2/t6-su1-u2';

/**SUb Unidad 2 */
import { T1Su2U2Page } from '../Sub Unidad 2/t1-su2-u2/t1-su2-u2';
import { T2Su2U2Page } from '../Sub Unidad 2/t2-su2-u2/t2-su2-u2';

/**SUb Unidad 3 */
import { T1Su3U2Page } from '../Sub Unidad 3/t1-su3-u2/t1-su3-u2';
import { T2Su3U2Page } from '../Sub Unidad 3/t2-su3-u2/t2-su3-u2';
import { T3Su3U2Page } from '../Sub Unidad 3/t3-su3-u2/t3-su3-u2';
import { T4Su3U2Page } from '../Sub Unidad 3/t4-su3-u2/t4-su3-u2';
import { T5Su3U2Page } from '../Sub Unidad 3/t5-su3-u2/t5-su3-u2';
import { T6Su3U2Page } from '../Sub Unidad 3/t6-su3-u2/t6-su3-u2';

/**SUb Unidad 4 */
import { T1Su4U2Page } from '../Sub Unidad 4/t1-su4-u2/t1-su4-u2';
import { T2Su4U2Page } from '../Sub Unidad 4/t2-su4-u2/t2-su4-u2';

import { IntU3Page } from '../../Unidad 3/int-u3/int-u3';
import { A1Su1U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a1-su1-u2/a1-su1-u2';
import { A2Su1U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a2-su1-u2/a2-su1-u2';
import { A3Su1U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a3-su1-u2/a3-su1-u2';
import { A4Su1U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU1/a4-su1-u2/a4-su1-u2';
import { A1Su2U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU2/a1-su2-u2/a1-su2-u2';
import { A1Su3U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a1-su3-u2/a1-su3-u2';
import { A2Su3U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU3/a2-su3-u2/a2-su3-u2';
import { A1Su4U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a1-su4-u2/a1-su4-u2';
import { A2Su4U2Page } from '../../../../Cápsulas (Actividades)/Capsu-U2/Capsu-U2-SU4/a2-su4-u2/a2-su4-u2';
import { PruebaU2Page } from '../../../../Pruebas (Evaluaciones)/prueba-u2/prueba-u2';
import { LogrosU2Page } from '../../../../Logros/logros-u2/logros-u2';





/**
 * Generated class for the SelecSuU2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u2',
  templateUrl: 'selec-su-u2.html',
})
export class SelecSuU2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLogrosU2() {
    this.navCtrl.push(LogrosU2Page)
  }

  /** Unidad 2 Sub Unidad 1*/
  t1_su1_u2() {
    this.navCtrl.push(T1Su1U2Page);
  }

  t2_su1_u2() {
    this.navCtrl.push(T2Su1U2Page);
  }

  t3_su1_u2() {
    this.navCtrl.push(T3Su1U2Page);
  }

  t4_su1_u2() {
    this.navCtrl.push(T4Su1U2Page);
  }

  t5_su1_u2() {
    this.navCtrl.push(T5Su1U2Page);
  }

  t6_su1_u2() {
    this.navCtrl.push(T6Su1U2Page);
  }

  /**Cápsula (Actividad) U2-SU1 */
  a1_su1_U2() {
    this.navCtrl.push(A1Su1U2Page);
  }

  a2_su1_U2() {
    this.navCtrl.push(A2Su1U2Page);
  }

  a3_su1_U2() {
    this.navCtrl.push(A3Su1U2Page);
  }

  a4_su1_U2() {
    this.navCtrl.push(A4Su1U2Page);
  }

  /** Unidad 2 Sub Unidad 2*/
  t1_su2_u2() {
    this.navCtrl.push(T1Su2U2Page);
  }

  t2_su2_u2() {
    this.navCtrl.push(T2Su2U2Page);
  }

  /**Cápsula (Actividad) U2-SU2 */
  a1_su2_u2() {
    this.navCtrl.push(A1Su2U2Page);
  }

  /** Unidad 2 Sub Unidad 3*/
  t1_su3_u2() {
    this.navCtrl.push(T1Su3U2Page);
  }

  t2_su3_u2() {
    this.navCtrl.push(T2Su3U2Page);
  }

  t3_su3_u2() {
    this.navCtrl.push(T3Su3U2Page);
  }

  t4_su3_u2() {
    this.navCtrl.push(T4Su3U2Page);
  }

  t5_su3_u2() {
    this.navCtrl.push(T5Su3U2Page);
  }

  t6_su3_u2() {
    this.navCtrl.push(T6Su3U2Page);
  }

  /**Cápsula (Actividad) U2-SU3 */
  a1_su3_u2() {
    this.navCtrl.push(A1Su3U2Page);
  }

  a2_su3_u2() {
    this.navCtrl.push(A2Su3U2Page);
  }

  /** Unidad 2 Sub Unidad 4*/
  t1_su4_u2() {
    this.navCtrl.push(T1Su4U2Page);
  }

  t2_su4_u2() {
    this.navCtrl.push(T2Su4U2Page);
  }

  /**Cápsula (Actividad) U2-SU4 */
  a1_su4_u2() {
    this.navCtrl.push(A1Su4U2Page);
  }

  a2_su4_u2() {
    this.navCtrl.push(A2Su4U2Page);
  }

  aEVA_U2() {
    this.navCtrl.push(PruebaU2Page);
  }

  aintU3() {
    this.navCtrl.setRoot(IntU3Page)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU2Page');
  }

}
