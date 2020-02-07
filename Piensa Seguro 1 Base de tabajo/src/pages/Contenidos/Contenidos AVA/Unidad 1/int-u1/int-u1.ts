import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU1Page } from '../selec-su-u1/selec-su-u1';

/**
 * Generated class for the IntU1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u1',
  templateUrl: 'int-u1.html',
})
export class IntU1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU1Page');
  }


  aSelec_SU_U1(){
    this.navCtrl.push(SelecSuU1Page)
  }

}
