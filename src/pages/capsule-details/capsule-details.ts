import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../app/models/Capsule';

/**
 * Generated class for the CapsuleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-details',
  templateUrl: 'capsule-details.html',
})
export class CapsuleDetailsPage {
  capsule: Capsule;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams
  ) {
    this.capsule = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleDetailsPage');
  }

}
