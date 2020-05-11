import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BiblioPage } from '../biblio/biblio';

/**
 * Generated class for the AcercaDePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acerca-de',
  templateUrl: 'acerca-de.html',
})
export class AcercaDePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aBiblio(){
    this.navCtrl.push(BiblioPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaDePage');
  }

}
