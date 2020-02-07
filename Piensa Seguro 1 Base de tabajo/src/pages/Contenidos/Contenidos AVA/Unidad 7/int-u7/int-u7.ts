import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU7Page } from '../selec-su-u7/selec-su-u7';

/**
 * Generated class for the IntU7Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u7',
  templateUrl: 'int-u7.html',
})
export class IntU7Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU7Page');
  }

  aSelec_SU_U7(){
    this.navCtrl.push(SelecSuU7Page);
  }

}
