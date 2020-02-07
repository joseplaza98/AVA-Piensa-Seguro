import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU2Page } from '../selec-su-u2/selec-su-u2';

/**
 * Generated class for the IntU2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u2',
  templateUrl: 'int-u2.html',
})
export class IntU2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU2Page');
  }

  aSelec_SU_U2(){
    this.navCtrl.push(SelecSuU2Page);
  }

}
