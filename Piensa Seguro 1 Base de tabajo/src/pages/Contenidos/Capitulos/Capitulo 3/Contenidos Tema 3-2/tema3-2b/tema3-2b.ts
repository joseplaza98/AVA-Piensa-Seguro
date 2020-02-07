import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComandosNmapPage } from '../../Talleres Capitulo 3/Nmap/comandos-nmap/comandos-nmap';
import { PracticaNmapPage } from '../../Talleres Capitulo 3/Nmap/practica-nmap/practica-nmap';
import { ComandosNetCatPage } from '../../Talleres Capitulo 3/NetCat/comandos-net-cat/comandos-net-cat';
import { PracticaNetCatPage } from '../../Talleres Capitulo 3/NetCat/practica-net-cat/practica-net-cat';
import { Cap3_1bPage } from '../../../../Actividades de retroalimentacion/Actividades Cap3/cap3-1b/cap3-1b';

/**
 * Generated class for the Tema3_2bPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema3-2b',
  templateUrl: 'tema3-2b.html',
})
export class Tema3_2bPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  aAct3_1b(){
    this.navCtrl.push(Cap3_1bPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema3_2bPage');
  }

  aComandosNmap(){
this.navCtrl.push(ComandosNmapPage);
  }

  aPracticaNmap(){
    this.navCtrl.push(PracticaNmapPage);
  }

  aComandosNetcat(){
    this.navCtrl.push(ComandosNetCatPage);
  }

  aPracticaNetcat(){
    this.navCtrl.push(PracticaNetCatPage);
  }
}
