import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1U2Page } from '../Sub Unidad 1/t1-su1-u2/t1-su1-u2';
import { T2Su1U2Page } from '../Sub Unidad 1/t2-su1-u2/t2-su1-u2';
import { T3Su1U2Page } from '../Sub Unidad 1/t3-su1-u2/t3-su1-u2';
import { T4Su1U2Page } from '../Sub Unidad 1/t4-su1-u2/t4-su1-u2';
import { T1Su2U2Page } from '../Sub Unidad 2/t1-su2-u2/t1-su2-u2';
import { T1Su3U2Page } from '../Sub Unidad 3/t1-su3-u2/t1-su3-u2';
import { T2Su3U2Page } from '../Sub Unidad 3/t2-su3-u2/t2-su3-u2';
import { T1Su4U2Page } from '../Sub Unidad 4/t1-su4-u2/t1-su4-u2';
import { T2Su4U2Page } from '../Sub Unidad 4/t2-su4-u2/t2-su4-u2';
import { T3Su4U2Page } from '../Sub Unidad 4/t3-su4-u2/t3-su4-u2';
import { T4Su4U2Page } from '../Sub Unidad 4/t4-su4-u2/t4-su4-u2';
import { T5Su4U2Page } from '../Sub Unidad 4/t5-su4-u2/t5-su4-u2';
import { T6Su4U2Page } from '../Sub Unidad 4/t6-su4-u2/t6-su4-u2';
import { T7Su4U2Page } from '../Sub Unidad 4/t7-su4-u2/t7-su4-u2';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU2Page');
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

  /** Unidad 2 Sub Unidad 2*/
  t1_su2_u1() {
    this.navCtrl.push(T1Su2U2Page);
  }

  /** Unidad 2 Sub Unidad 3*/
  t1_su3_u2() {
    this.navCtrl.push(T1Su3U2Page);
  }

  t2_su3_u2() {
    this.navCtrl.push(T2Su3U2Page);
  }

  /** Unidad 2 Sub Unidad 4*/
  t1_su4_u2() {
    this.navCtrl.push(T1Su4U2Page);
  }

  t2_su4_u2() {
    this.navCtrl.push(T2Su4U2Page);
  }

  t3_su4_u2() {
    this.navCtrl.push(T3Su4U2Page);
  }

  t4_su4_u2() {
    this.navCtrl.push(T4Su4U2Page);
  }

  t5_su4_u2() {
    this.navCtrl.push(T5Su4U2Page);
  }

  t6_su4_u2() {
    this.navCtrl.push(T6Su4U2Page);
  }

  t7_su4_u2() {
    this.navCtrl.push(T7Su4U2Page);
  }

}
