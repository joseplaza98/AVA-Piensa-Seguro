import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema3_1aPage } from '../Contenidos Tema 3-1/tema3-1a/tema3-1a';
import { Tema3_2aPage } from '../Contenidos Tema 3-2/tema3-2a/tema3-2a';
import { Eva1Cap3Page } from '../../../Actividades de retroalimentacion/Evaluaciones/eva1-cap3/eva1-cap3';

/**
 * Generated class for the Tema3_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema3-1',
  templateUrl: 'tema3-1.html',
})
export class Tema3_1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema3_1Page');
  }

  aTema3_1a() {
    this.navCtrl.push(Tema3_1aPage);
  }

  aTema3_2a() {
    this.navCtrl.push(Tema3_2aPage);
  }

  aEval1_cap3(){
    this.navCtrl.push(Eva1Cap3Page);
  }

}
