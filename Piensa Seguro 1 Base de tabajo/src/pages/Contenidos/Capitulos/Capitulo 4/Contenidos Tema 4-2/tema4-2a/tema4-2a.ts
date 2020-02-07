import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema4_2bPage } from '../tema4-2b/tema4-2b';

/**
 * Generated class for the Tema4_2aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-2a',
  templateUrl: 'tema4-2a.html',
})
export class Tema4_2aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_2aPage');
  }
 
  aTema4_2b(){
    this.navCtrl.push(Tema4_2bPage);
  }

}
