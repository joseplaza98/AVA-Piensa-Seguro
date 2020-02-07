import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap2_1aPage } from '../../../../Actividades de retroalimentacion/Actividades Cap2/cap2-1a/cap2-1a';

/**
 * Generated class for the Tema2_2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema2-2b',
  templateUrl: 'tema2-2b.html',
})
export class Tema2_2bPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct2_1a(){
    this.navCtrl.push(Cap2_1aPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema2_2bPage');
  }

}
