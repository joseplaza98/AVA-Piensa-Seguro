import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cap3_1aPage } from '../../../../Actividades de retroalimentacion/Actividades Cap3/cap3-1a/cap3-1a';

/**
 * Generated class for the Tema3_1aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema3-1a',
  templateUrl: 'tema3-1a.html',
})
export class Tema3_1aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct3_1a(){
    this.navCtrl.push(Cap3_1aPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema3_1aPage');
  }

}
