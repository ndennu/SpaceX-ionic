import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Rocket } from '../../app/models/Rocket';


@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {

  rocket: Rocket;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.rocket = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketDetailsPage');
  }

}
