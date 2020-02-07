import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap1_1bPage } from '../../../Actividades de retroalimentacion/Actividades Cap1/cap1-1b/cap1-1b';


/**
 * Generated class for the Tema1_2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema1-2',
  templateUrl: 'tema1-2.html',
})
export class Tema1_2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct1_1b() {
    this.navCtrl.push(Cap1_1bPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema1_2Page');
  }

}
