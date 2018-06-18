import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../app/models/Launch';


@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {

  launch: Launch;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams)
  {
    this.launch = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

}
