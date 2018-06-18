import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About } from '../../app/models/About';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';

/**
 * Generated class for the CompagnyInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compagny-info',
  templateUrl: 'compagny-info.html',
})
export class CompagnyInfoPage {

  about: About;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.spacexApi.getInfoCompagny().subscribe(data => {
        this.about = data
        console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompagnyInfoPage');
  }

}
