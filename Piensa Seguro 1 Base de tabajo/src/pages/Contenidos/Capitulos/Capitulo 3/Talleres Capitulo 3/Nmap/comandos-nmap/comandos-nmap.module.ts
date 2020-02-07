import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComandosNmapPage } from './comandos-nmap';

@NgModule({
  declarations: [
    ComandosNmapPage,
  ],
  imports: [
    IonicPageModule.forChild(ComandosNmapPage),
  ],
})
export class ComandosNmapPageModule {}
