import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema1_1Page } from '../Capitulos/Capitulo 1/tema1-1/tema1-1';
import { Tema1_2Page } from '../Capitulos/Capitulo 1/tema1-2/tema1-2';
import { Tema1_3Page } from '../Capitulos/Capitulo 1/tema1-3/tema1-3';

/**
 * Generated class for the TemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-temas',
  templateUrl: 'temas.html',
})
export class TemasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TemasPage');
  }

  aTema1_1() {
    this.navCtrl.push(Tema1_1Page);
  }

  aTema1_2() {
    this.navCtrl.push(Tema1_2Page);
  }

  aTema1_3() {
    this.navCtrl.push(Tema1_3Page);
  }

}
