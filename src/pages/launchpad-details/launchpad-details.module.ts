import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchpadDetailsPage } from './launchpad-details';

@NgModule({
  declarations: [
    LaunchpadDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchpadDetailsPage),
  ],
})
export class LaunchpadDetailsPageModule {}
