import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompagnyInfoPage } from './compagny-info';

@NgModule({
  declarations: [
    CompagnyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CompagnyInfoPage),
  ],
})
export class CompagnyInfoPageModule {}
