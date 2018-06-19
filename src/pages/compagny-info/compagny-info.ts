import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { About } from '../../app/models/About';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { CompanyHistory } from '../../app/models/CompanyHistory';

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
  histories: CompanyHistory[];
  filterList: string = "timeline";
  tl: boolean = true;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider) {

    this.spacexApi.getInfoCompagny().subscribe(data => {
        this.about = data
        console.log(data);
    });

    this.spacexApi.getTimeLineCompagny().subscribe(data => {
      this.histories = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompagnyInfoPage');
  }

  changeDisplay() {
    switch (this.filterList) {
      case "timeline": this.tl = !this.tl; break;
      case "about": this.tl = !this.tl; break;
    } 
  }

}
