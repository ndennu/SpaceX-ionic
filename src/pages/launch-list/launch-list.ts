import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/models/Launch';

@IonicPage()
@Component({
    selector: 'page-launch-list',
    templateUrl: 'launch-list.html',
})
export class LaunchListPage {

    launches: Launch[];

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private spacexApi: SpacexApiProvider) {

        this.spacexApi.getAllLaunches().subscribe(data => {
            this.launches = data
        });

    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LaunchListPage');
    }

}
