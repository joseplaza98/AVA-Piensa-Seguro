import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap2_1bPage } from '../../../../Actividades de retroalimentacion/Actividades Cap2/cap2-1b/cap2-1b';

/**
 * Generated class for the Tema2_3aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema2-3a',
  templateUrl: 'tema2-3a.html',
})
export class Tema2_3aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct2_1b(){
    this.navCtrl.push(Cap2_1bPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema2_3aPage');
  }

}
