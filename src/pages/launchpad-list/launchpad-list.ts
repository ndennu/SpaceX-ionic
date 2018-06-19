import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launchpad } from '../../app/models/Launchpad';
import { LaunchpadDetailsPage } from '../launchpad-details/launchpad-details';

/**
 * Generated class for the LaunchpadListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launchpad-list',
  templateUrl: 'launchpad-list.html',
})
export class LaunchpadListPage {

  launchpads: Launchpad[];
  private launchpadSave: Launchpad[];

  filterList: string = "all";
  onLoad: boolean = true;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.spacexApi.getAllLaunchpads().subscribe(data => {
        this.launchpads = data;
        this.launchpadSave = data;
        this.onLoad = false;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadListPage');
  }

  launchpadDetails(launchpad: Launchpad) {
    this.navCtrl.push(LaunchpadDetailsPage, launchpad);
  }
}
