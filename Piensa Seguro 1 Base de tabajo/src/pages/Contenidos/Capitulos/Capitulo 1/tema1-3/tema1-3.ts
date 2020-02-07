import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap1_1cPage } from '../../../Actividades de retroalimentacion/Actividades Cap1/cap1-1c/cap1-1c';

/**
 * Generated class for the Tema1_3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema1-3',
  templateUrl: 'tema1-3.html',
})
export class Tema1_3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    aAct1_1c() {
    this.navCtrl.push(Cap1_1cPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema1_3Page');
  }

}
