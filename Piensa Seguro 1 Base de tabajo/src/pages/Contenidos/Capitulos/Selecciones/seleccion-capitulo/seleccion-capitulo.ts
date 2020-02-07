import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectT1Page } from '../../Capitulo 1/select-t1/select-t1';
import { Tema2_1Page } from '../../Capitulo 2/tema2-1/tema2-1';
import { Tema3_1Page } from '../../Capitulo 3/tema3-1/tema3-1';
import { Tema4_1Page } from '../../Capitulo 4/tema4-1/tema4-1';


/**
 * Generated class for the SeleccionCapituloPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-seleccion-capitulo',
  templateUrl: 'seleccion-capitulo.html',
})
export class SeleccionCapituloPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeleccionCapituloPage');
  }

  aSelect_T1() {
    this.navCtrl.push(SelectT1Page);
  }

  aTema2_1() {
    this.navCtrl.push(Tema2_1Page);
  }

  aTema3_1() {
    this.navCtrl.push(Tema3_1Page);
  }

  aTema4_1() {
    this.navCtrl.push(Tema4_1Page);
  }

}
