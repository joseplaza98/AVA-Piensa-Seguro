import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../Sesión/login/login';
import { RegistrarPage } from '../Sesión/registrar/registrar';

/**
 * Generated class for the PaginaInicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina-inicio',
  templateUrl: 'pagina-inicio.html',
})
export class PaginaInicioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaginaInicioPage');
  }

  aLogin(){
    this.navCtrl.push(LoginPage);
  }

  aRegistrar(){
    this.navCtrl.push(RegistrarPage);
  }
}
