import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un3Page } from '../Sub Unidad 1/t1-su1-un3/t1-su1-un3';
import { T1Su2Un3Page } from '../Sub Unidad 2/t1-su2-un3/t1-su2-un3';
import { T1Su3Un3Page } from '../Sub Unidad 3/t1-su3-un3/t1-su3-un3';
import { T2Su3Un3Page } from '../Sub Unidad 3/t2-su3-un3/t2-su3-un3';
import { T3Su3Un3Page } from '../Sub Unidad 3/t3-su3-un3/t3-su3-un3';
import { T4Su3Un3Page } from '../Sub Unidad 3/t4-su3-un3/t4-su3-un3';
import { T5Su3U3Page } from '../Sub Unidad 3/t5-su3-u3/t5-su3-u3';
import { T6Su3U3Page } from '../Sub Unidad 3/t6-su3-u3/t6-su3-u3';
import { IntU4Page } from '../../Unidad 4/int-u4/int-u4';
import { A1Su1U3Page } from '../../../../Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU1/a1-su1-u3/a1-su1-u3';
import { A1Su2U3Page } from '../../../../Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU2/a1-su2-u3/a1-su2-u3';
import { A1Su3U3Page } from '../../../../Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a1-su3-u3/a1-su3-u3';
import { A2Su3U3Page } from '../../../../Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a2-su3-u3/a2-su3-u3';
import { A3Su3U3Page } from '../../../../Cápsulas (Actividades)/Capsu-U3/Capsu-U3-SU3/a3-su3-u3/a3-su3-u3';
import { PruebaU3Page } from '../../../../Pruebas (Evaluaciones)/prueba-u3/prueba-u3';

/**
 * Generated class for the SelecSuU3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u3',
  templateUrl: 'selec-su-u3.html',
})
export class SelecSuU3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU3Page');
  }

  /**Unidad 3 Sub Unidad 1*/
  t1_su1_u3() {
    this.navCtrl.push(T1Su1Un3Page);
  }

  /**Cápsula (Actividad) U3-SU1 */
  a1_su1_u3() {
    this.navCtrl.push(A1Su1U3Page);
  }

  /**Unidad 3 Sub Unidad 2*/
  t1_su2_u3() {
    this.navCtrl.push(T1Su2Un3Page);
  }

  /**Cápsula (Actividad) U3-SU2 */
  a1_su2_u3() {
    this.navCtrl.push(A1Su2U3Page);
  }

  /**Unidad 3 Sub Unidad 3*/
  t1_su3_u3() {
    this.navCtrl.push(T1Su3Un3Page);
  }

  t2_su3_u3() {
    this.navCtrl.push(T2Su3Un3Page);
  }

  t3_su3_u3() {
    this.navCtrl.push(T3Su3Un3Page);
  }

  t4_su3_u3() {
    this.navCtrl.push(T4Su3Un3Page);
  }

  t5_su3_u3() {
    this.navCtrl.push(T5Su3U3Page);
  }

  t6_su3_u3() {
    this.navCtrl.push(T6Su3U3Page);
  }

  /**Cápsula (Actividad) U3-SU3 */
  a1_su3_u3() {
    this.navCtrl.push(A1Su3U3Page);
  }

  a2_su3_u3() {
    this.navCtrl.push(A2Su3U3Page);
  }

  a3_su3_u3() {
    this.navCtrl.push(A3Su3U3Page);
  }

  /**Unidad 3 Sub Unidad 4*/
  t1_su4_u3() {
    this.navCtrl.push(T1Su1Un3Page);
  }

  t2_su4_u3() {
    this.navCtrl.push(T1Su1Un3Page);
  }

  aEVA_U3(){
    this.navCtrl.push(PruebaU3Page);
  }

  aintU4() {
    this.navCtrl.setRoot(IntU4Page)
  }

}
