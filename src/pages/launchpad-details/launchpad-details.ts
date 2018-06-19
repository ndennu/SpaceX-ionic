import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpad } from '../../app/models/Launchpad';

/**
 * Generated class for the LaunchpadDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-details',
  templateUrl: 'launchpad-details.html',
})
export class LaunchpadDetailsPage {

  launchpad: Launchpad;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.launchpad = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailsPage');
  }

}
