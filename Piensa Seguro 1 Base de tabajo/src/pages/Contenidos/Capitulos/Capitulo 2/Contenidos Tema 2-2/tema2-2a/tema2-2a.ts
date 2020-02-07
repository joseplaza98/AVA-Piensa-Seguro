import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema2_2bPage } from '../tema2-2b/tema2-2b';

/**
 * Generated class for the Tema2_2aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema2-2a',
  templateUrl: 'tema2-2a.html',
})
export class Tema2_2aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema2_2aPage');
  }

  aTema2_2b(){
    this.navCtrl.push(Tema2_2bPage);
  }

}
