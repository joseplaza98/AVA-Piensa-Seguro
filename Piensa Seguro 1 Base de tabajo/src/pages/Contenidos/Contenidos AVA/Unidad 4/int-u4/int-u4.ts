import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU4Page } from '../selec-su-u4/selec-su-u4';

/**
 * Generated class for the IntU4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u4',
  templateUrl: 'int-u4.html',
})
export class IntU4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU4Page');
  }

  aSelec_SU_U4(){
    this.navCtrl.push(SelecSuU4Page);
  }


}
