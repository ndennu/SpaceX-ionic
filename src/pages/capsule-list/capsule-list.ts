import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../app/models/Capsule';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CapsuleDetailsPage } from '../capsule-details/capsule-details';

/**
 * Generated class for the CapsuleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule-list',
  templateUrl: 'capsule-list.html',
})
export class CapsuleListPage {

  capsules: Capsule[];
  private capsulesSave: Capsule[];

  filterList: string = "all";
  onLoad: boolean = true;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider) {
      this.spacexApi.getAllCapsules().subscribe(data => {
        this.capsules = data;
        this.capsulesSave = data;
        this.onLoad = false;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsuleListPage');
  }

  capsuleDetails(capsule: Capsule) {
    this.navCtrl.push(CapsuleDetailsPage, capsule);
  }

  filterChange(){
    this.capsules = this.capsulesSave;

    switch (this.filterList) {
      case "active": this.capsules = this.capsules.filter(rocket => rocket.active === true); break;
      case "inactive": this.capsules = this.capsules.filter(rocket => rocket.active === false); break;
    } 
  }

}
