import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

@IonicPage()
@Component({
  selector: 'page-launch-list',
  templateUrl: 'launch-list.html',
})
export class LaunchListPage {



  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

      this.spacexApi.getAllLaucnhes().subscribe(data => {
        console.log(data);
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchListPage');
  }

}
