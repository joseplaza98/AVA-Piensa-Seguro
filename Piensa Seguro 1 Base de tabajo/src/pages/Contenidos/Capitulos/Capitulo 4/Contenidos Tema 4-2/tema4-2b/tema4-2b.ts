import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema4_3aPage } from '../../Contenidos Tema 4-3/tema4-3a/tema4-3a';
import { Tema4_5aPage } from '../../Contenidos Tema 4-5/tema4-5a/tema4-5a';
import { Tema4_4aPage } from '../../Contenidos Tema 4-4/tema4-4a/tema4-4a';

/**
 * Generated class for the Tema4_2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-2b',
  templateUrl: 'tema4-2b.html',
})
export class Tema4_2bPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_2bPage');
  }

  aTema4_3a() {
    this.navCtrl.push(Tema4_3aPage);
  }

  aTema4_4a() {
    this.navCtrl.push(Tema4_4aPage);
  }

  aTema4_5a() {
    this.navCtrl.push(Tema4_5aPage);
  }

}
