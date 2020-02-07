import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema1_1Page } from '../tema1-1/tema1-1';
import { Tema1_2Page } from '../tema1-2/tema1-2';
import { Tema1_3Page } from '../tema1-3/tema1-3';
import { Eva1Cap1Page } from '../../../Actividades de retroalimentacion/Evaluaciones/eva1-cap1/eva1-cap1';

/**
 * Generated class for the SelectT1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-t1',
  templateUrl: 'select-t1.html',
})
export class SelectT1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectT1Page');
  }

  aTema1_1(){
    this.navCtrl.push(Tema1_1Page);
  }

  aTema1_2(){
    this.navCtrl.push(Tema1_2Page);
  }

  aTema1_3(){
    this.navCtrl.push(Tema1_3Page);
  }

  aEva1_cap1(){
    this.navCtrl.push(Eva1Cap1Page);
  }

}
