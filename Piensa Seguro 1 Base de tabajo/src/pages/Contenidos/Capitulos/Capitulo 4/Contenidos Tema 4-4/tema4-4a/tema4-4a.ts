import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap4_1bPage } from '../../../../Actividades de retroalimentacion/Actividades Cap4/cap4-1b/cap4-1b';

/**
 * Generated class for the Tema4_4aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-4a',
  templateUrl: 'tema4-4a.html',
})
export class Tema4_4aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct4_1b(){
    this.navCtrl.push(Cap4_1bPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_4aPage');
  }

}
