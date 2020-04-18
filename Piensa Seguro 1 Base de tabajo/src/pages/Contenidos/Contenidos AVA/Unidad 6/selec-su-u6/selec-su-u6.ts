import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un6Page } from '../Sub Unidad 1/t1-su1-un6/t1-su1-un6';
import { T2Su1Un6Page } from '../Sub Unidad 1/t2-su1-un6/t2-su1-un6';
import { T3Su1Un6Page } from '../Sub Unidad 1/t3-su1-un6/t3-su1-un6';
import { T4Su1Un6Page } from '../Sub Unidad 1/t4-su1-un6/t4-su1-un6';
import { T5Su1Un6Page } from '../Sub Unidad 1/t5-su1-un6/t5-su1-un6';
import { T6Su1Un6Page } from '../Sub Unidad 1/t6-su1-un6/t6-su1-un6';
import { T7Su1Un6Page } from '../Sub Unidad 1/t7-su1-un6/t7-su1-un6';
import { T8Su1Un6Page } from '../Sub Unidad 1/t8-su1-un6/t8-su1-un6';
import { IntU7Page } from '../../Unidad 7/int-u7/int-u7';
import { A1Su1U6Page } from '../../../../Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a1-su1-u6/a1-su1-u6';
import { A3Su1U6Page } from '../../../../Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a3-su1-u6/a3-su1-u6';
import { A2Su1U6Page } from '../../../../Cápsulas (Actividades)/Capsu-U6/Capsu-U6-SU1/a2-su1-u6/a2-su1-u6';
import { PruebaU6Page } from '../../../../Pruebas (Evaluaciones)/prueba-u6/prueba-u6';

/**
 * Generated class for the SelecSuU6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selec-su-u6',
  templateUrl: 'selec-su-u6.html',
})
export class SelecSuU6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU6Page');
  }

  /**Unidad 6 Sub Unidad 1 */
  t1_su1_u6() {
    this.navCtrl.push(T1Su1Un6Page);
  }

  t2_su1_u6() {
    this.navCtrl.push(T2Su1Un6Page);
  }

  t3_su1_u6() {
    this.navCtrl.push(T3Su1Un6Page);
  }

  t4_su1_u6() {
    this.navCtrl.push(T4Su1Un6Page);
  }

  t5_su1_u6() {
    this.navCtrl.push(T5Su1Un6Page);
  }

  t6_su1_u6() {
    this.navCtrl.push(T6Su1Un6Page);
  }

  t7_su1_u6() {
    this.navCtrl.push(T7Su1Un6Page);
  }

  t8_su1_u6() {
    this.navCtrl.push(T8Su1Un6Page);
  }

  /**Cápsula (Actividad) U6-SU1 */
  a1_su1_u6() {
    this.navCtrl.push(A1Su1U6Page);
  }

  a2_su1_u6() {
    this.navCtrl.push(A2Su1U6Page);
  }

  a3_su1_u6() {
    this.navCtrl.push(A3Su1U6Page);
  }

  aEVA_U6() {
    this.navCtrl.push(PruebaU6Page);
  }

  aintU7() {
    this.navCtrl.setRoot(IntU7Page)
  }

}
