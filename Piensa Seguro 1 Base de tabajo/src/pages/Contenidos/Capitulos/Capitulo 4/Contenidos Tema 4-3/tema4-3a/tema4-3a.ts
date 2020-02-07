import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema4_3bPage } from '../tema4-3b/tema4-3b';
import { Cap4_1aPage } from '../../../../Actividades de retroalimentacion/Actividades Cap4/cap4-1a/cap4-1a';

/**
 * Generated class for the Tema4_3aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-3a',
  templateUrl: 'tema4-3a.html',
})
export class Tema4_3aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_3aPage');
  }

  aAct4_1a(){
    this.navCtrl.push(Cap4_1aPage);
  }

  aTema4_3b(){
    this.navCtrl.push(Tema4_3bPage);
  }

}
