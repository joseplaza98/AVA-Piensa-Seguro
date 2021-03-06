import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1U1Page } from '../Sub Unidad 1/t1-su1-u1/t1-su1-u1';
import { T2Su1U1Page } from '../Sub Unidad 1/t2-su1-u1/t2-su1-u1';
import { T3Su1U1Page } from '../Sub Unidad 1/t3-su1-u1/t3-su1-u1';
import { T4Su1U1Page } from '../Sub Unidad 1/t4-su1-u1/t4-su1-u1';

import { A1Su1U1Page } from '../../../../Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a1-su1-u1/a1-su1-u1';
import { A2Su1U1Page } from '../../../../Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a2-su1-u1/a2-su1-u1';
import { A3Su1U1Page } from '../../../../Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU1/a3-su1-u1/a3-su1-u1';

import { T1Su2U1Page } from '../Sub Unidad 2/t1-su2-u1/t1-su2-u1';
import { T2Su2U1Page } from '../Sub Unidad 2/t2-su2-u1/t2-su2-u1';
import { T3Su2U1Page } from '../Sub Unidad 2/t3-su2-u1/t3-su2-u1';
import { A1Su2U1Page } from '../../../../Cápsulas (Actividades)/Capsu-U1/Capsu-U1-SU2/a1-su2-u1/a1-su2-u1';
import { PruebaU1Page } from '../../../../Pruebas (Evaluaciones)/prueba-u1/prueba-u1';

import { IntU2Page } from '../../Unidad 2/int-u2/int-u2';
import { LogrosU1Page } from '../../../../Logros/logros-u1/logros-u1';

/**
 * Generated class for the SelecSuU1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u1',
  templateUrl: 'selec-su-u1.html',
})
export class SelecSuU1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aLogrosU1(){
    this.navCtrl.push(LogrosU1Page)
  }


  /**Temas Sub Unidad 1 */

  t1_su1_u1() {
    this.navCtrl.push(T1Su1U1Page);
  }

  t2_su1_u1() {
    this.navCtrl.push(T2Su1U1Page);
  }

  t3_su1_u1() {
    this.navCtrl.push(T3Su1U1Page);
  }

  t4_su1_u1() {
    this.navCtrl.push(T4Su1U1Page);
  }

  /**Cápsula (Actividad) U1-SU1 */

  a1_su1_u1() {
    this.navCtrl.push(A1Su1U1Page)
  }

  a2_su1_u1() {
    this.navCtrl.push(A2Su1U1Page)
  }

  a3_su1_u1() {
    this.navCtrl.push(A3Su1U1Page)
  }

  /** Temas Sub Unidad 2 */

  t1_su2_u1() {
    this.navCtrl.push(T1Su2U1Page);
  }

  t2_su2_u1() {
    this.navCtrl.push(T2Su2U1Page);
  }

  t3_su2_u1() {
    this.navCtrl.push(T3Su2U1Page);
  }

  /**Cápsula (Actividad) U1-SU2 */
  a1_su2_u1() {
    this.navCtrl.push(A1Su2U1Page)
  }

  aEVA_U1() {
    this.navCtrl.push(PruebaU1Page);
  }

  aintU2() {
    this.navCtrl.setRoot(IntU2Page)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU1Page');
  }

}
