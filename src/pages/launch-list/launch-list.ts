import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { Launch } from '../../app/models/Launch';
import { LaunchDetailsPage } from '../launch-details/launch-details';

@IonicPage()
@Component({
    selector: 'page-launch-list',
    templateUrl: 'launch-list.html',
})
export class LaunchListPage {

    filters: { [filter: string]: string; } = {}
    value: any;

    launches: Launch[];
    launchesSave: Launch[];

    private onLoad: boolean = true;

    filterList: string = "all";

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private spacexApi: SpacexApiProvider) {

        this.spacexApi.getAllLaunches().subscribe(data => {
            this.launches = data;
            this.launchesSave = data;
            this.onLoad = false;
        });

    }
    
    ionViewDidLoad() {
        console.log('ionViewDidLoad LaunchListPage');
    }

    launchDetails(launch: Launch) {
        this.navCtrl.push(LaunchDetailsPage, launch.flight_number);
    }

    filterChange() {
        this.launches = this.launchesSave;

        switch (this.filterList) {
            case "success": this.launches = this.launches.filter(launch => launch.launch_success === true); break;
            case "fail": this.launches = this.launches.filter(launch => launch.launch_success === false); break;
        } 
    }

    valueChange() {
        this.filters["launch_year"] = this.value;
        this.getWithFilters();
    }

    getWithFilters() {
        this.spacexApi.getLaunchesWithFilters(this.filters).subscribe(data => {
            this.launches = data;
            this.launchesSave = data;
        });
    }
}
