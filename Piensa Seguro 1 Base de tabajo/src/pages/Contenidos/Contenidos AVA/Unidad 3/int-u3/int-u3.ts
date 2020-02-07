import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelecSuU3Page } from '../selec-su-u3/selec-su-u3';

/**
 * Generated class for the IntU3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-int-u3',
  templateUrl: 'int-u3.html',
})
export class IntU3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntU3Page');
  }

  aSelec_SU_U3(){
    this.navCtrl.push(SelecSuU3Page);
  }

}
