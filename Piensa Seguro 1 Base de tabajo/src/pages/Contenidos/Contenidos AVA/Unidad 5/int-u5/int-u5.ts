import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU5Page } from '../selec-su-u5/selec-su-u5';

/**
 * Generated class for the IntU5Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u5',
  templateUrl: 'int-u5.html',
})
export class IntU5Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU5Page');
  }

  aSelec_SU_U5(){
    this.navCtrl.push(SelecSuU5Page);
  }

}
