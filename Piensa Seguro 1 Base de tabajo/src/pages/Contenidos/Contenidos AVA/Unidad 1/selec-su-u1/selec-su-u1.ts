import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1U1Page } from '../Sub Unidad 1/t1-su1-u1/t1-su1-u1';
import { T2Su1U1Page } from '../Sub Unidad 1/t2-su1-u1/t2-su1-u1';
import { T1Su2U1Page } from '../Sub Unidad 2/t1-su2-u1/t1-su2-u1';
import { T2Su2U1Page } from '../Sub Unidad 2/t2-su2-u1/t2-su2-u1';
import { IntU2Page } from '../../Unidad 2/int-u2/int-u2';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelecSuU1Page');
  }

  /**Temas Sub Unidad 1 */

  t1_su1_u1(){
    this.navCtrl.push(T1Su1U1Page);
  }

  t2_su1_u1(){
    this.navCtrl.push(T2Su1U1Page);
  }


  /** Temas Sub Unidad 2 */
  
  t1_su2_u1(){
    this.navCtrl.push(T1Su2U1Page);
  }

  t2_su2_u1(){
    this.navCtrl.push(T2Su2U1Page);
  }

  aintU2(){
    this.navCtrl.setRoot(IntU2Page)
  }

}
