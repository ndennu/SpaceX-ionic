import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launchpad } from '../../app/models/Launchpad';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

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
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) {
    var id = this.navParams.data;
    this.spacexApi.getLaunchPadById(id).subscribe(data => {
      this.launchpad = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadDetailsPage');
  }

}
