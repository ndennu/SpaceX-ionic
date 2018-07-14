import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/models/Rocket';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';


@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {

  rocket: Rocket;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider
  ) {
    var id = this.navParams.data;
    this.spacexApi.getRocketById(id).subscribe(data => {
      this.rocket = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

}
