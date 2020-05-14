import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { DisableSideMenu } from '../../../CustomDecorators/disable-side-menu.decorator';

/**
 * Generated class for the PruebaU1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@DisableSideMenu()
@IonicPage()
@Component({
  selector: 'page-prueba-u1',
  templateUrl: 'prueba-u1.html',
})
export class PruebaU1Page {

  /**Vista y ocultamiento */
  verPrueba: boolean = false;
  ocultarPrueba: boolean = true;

  ocultarBtn: boolean = true;
  verBtn: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
  }

  accion1() {
    this.verPrueba = !this.verPrueba;
    this.ocultarBtn = !this.ocultarBtn;
    this.checkActiveButton();

    let loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  checkActiveButton() {

    if (this.verPrueba = true) {
      this.ocultarPrueba = false;
      if (this.ocultarBtn = false) {
        this.verBtn = true;
      }
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PruebaU1Page');

    let alert = this.alertCtrl.create({
      title: 'NOTA',
      subTitle: 'Recuerde que solo tiene una oportunidad de realizar la prueba.',
      buttons: ['Entendido']
    });
    alert.present();
  }

}

