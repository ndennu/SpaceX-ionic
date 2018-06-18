import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/models/Rocket';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { RocketDetailsPage } from '../rocket-details/rocket-details';


@IonicPage()
@Component({
  selector: 'page-rocket-list',
  templateUrl: 'rocket-list.html',
})
export class RocketListPage {
  
  rockets: Rocket[];
  private rocketsSave: Rocket[];

  filterList: string = "all";
  onLoad: boolean = true;

  constructor(
      private navCtrl: NavController,
      private navParams: NavParams,
      private spacexApi: SpacexApiProvider) {

      this.spacexApi.getAllRockets().subscribe(data => {
          this.rockets = data;
          this.rocketsSave = data;
          this.onLoad = false;
      });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketListPage');
  }

  rocketDetails(rocket: Rocket){
    this.navCtrl.push(RocketDetailsPage, rocket);
  }

  filterChange(){
    this.rockets = this.rocketsSave;

    switch (this.filterList) {
      case "active": this.rockets = this.rockets.filter(rocket => rocket.active === true); break;
      case "inactive": this.rockets = this.rockets.filter(rocket => rocket.active === false); break;
    } 
  }

}
