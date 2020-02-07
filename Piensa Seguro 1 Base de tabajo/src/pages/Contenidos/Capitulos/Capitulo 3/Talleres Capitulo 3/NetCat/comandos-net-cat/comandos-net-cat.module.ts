import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComandosNetCatPage } from './comandos-net-cat';

@NgModule({
  declarations: [
    ComandosNetCatPage,
  ],
  imports: [
    IonicPageModule.forChild(ComandosNetCatPage),
  ],
})
export class ComandosNetCatPageModule {}
