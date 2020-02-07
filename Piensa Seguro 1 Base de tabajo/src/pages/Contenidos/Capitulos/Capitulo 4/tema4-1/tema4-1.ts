import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tema4_1aPage } from '../Contenidos Tema 4-1/tema4-1a/tema4-1a';
import { Tema4_2aPage } from '../Contenidos Tema 4-2/tema4-2a/tema4-2a';

import { Content } from 'ionic-angular';
import { Eva1Cap4Page } from '../../../Actividades de retroalimentacion/Evaluaciones/eva1-cap4/eva1-cap4';
/**
 * Generated class for the Tema4_1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tema4-1',
  templateUrl: 'tema4-1.html',
})
export class Tema4_1Page {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tema4_1Page');
  }

  aTema4_1a() {
    this.navCtrl.push(Tema4_1aPage);
  }

  aTema4_2a() {
    this.navCtrl.push(Tema4_2aPage);
  }

  scrollToDown() {
    this.content.scrollTo(0,700,400);
  }

  aEval1_cap4(){
    this.navCtrl.push(Eva1Cap4Page);
  }

}
