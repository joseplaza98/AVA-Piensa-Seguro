import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Su1Un7Page } from '../Sub Unidad 1/t1-su1-un7/t1-su1-un7';
import { T2Su1U7Page } from '../Sub Unidad 1/t2-su1-u7/t2-su1-u7';
import { InsigniasPage } from '../../../../Logros/insignias/insignias';
import { A2Su1U7Page } from '../../../../Cápsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a2-su1-u7/a2-su1-u7';
import { A1Su1U7Page } from '../../../../Cápsulas (Actividades)/Capsu-U7/Capsu-U7-SU1/a1-su1-u7/a1-su1-u7';
import { PruebaU7Page } from '../../../../Pruebas (Evaluaciones)/prueba-u7/prueba-u7';

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

  t2_su1_u7() {
    this.navCtrl.push(T2Su1U7Page);
  }

  /**Cápsula (Actividad) U6-SU1 */
  a1_su1_u7() {
    this.navCtrl.push(A1Su1U7Page);
  }

  a2_su1_u7() {
    this.navCtrl.push(A2Su1U7Page);
  }

  aEVA_U7() {
    this.navCtrl.setRoot(PruebaU7Page);
  }

  aInsignias() {
    this.navCtrl.setRoot(InsigniasPage)
  }
}
