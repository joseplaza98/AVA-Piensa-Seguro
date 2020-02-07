import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelecPage } from './selec';

@NgModule({
  declarations: [
    SelecPage,
  ],
  imports: [
    IonicPageModule.forChild(SelecPage),
  ],
})
export class SelecPageModule {}
