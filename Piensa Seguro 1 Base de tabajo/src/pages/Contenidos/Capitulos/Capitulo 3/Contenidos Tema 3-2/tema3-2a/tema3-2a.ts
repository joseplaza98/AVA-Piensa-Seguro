import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema3_2bPage } from '../tema3-2b/tema3-2b';

/**
 * Generated class for the Tema3_2aPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema3-2a',
  templateUrl: 'tema3-2a.html',
})
export class Tema3_2aPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema3_2aPage');
  }

  aTema3_2b(){
this.navCtrl.push(Tema3_2bPage);
  }

}
