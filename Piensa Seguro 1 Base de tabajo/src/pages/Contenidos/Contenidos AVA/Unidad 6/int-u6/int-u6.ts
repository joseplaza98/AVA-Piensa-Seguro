import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU6Page } from '../selec-su-u6/selec-su-u6';

/**
 * Generated class for the IntU6Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u6',
  templateUrl: 'int-u6.html',
})
export class IntU6Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU6Page');
  }

  aSelec_SU_U6(){
    this.navCtrl.push(SelecSuU6Page);
  }

}
