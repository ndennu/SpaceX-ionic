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
    valueYear: any;
    order: boolean;

    launches: Launch[];
    launchesSave: Launch[];

    private onLoad: boolean = true;

    filterList: string = "all";

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private spacexApi: SpacexApiProvider) {

        this.order = false;
        this.filters["order"] = this.order ? "asc" : "desc";

        this.spacexApi.getLaunchesWithFilters(this.filters).subscribe(data => {
            this.launches = data;
            this.launchesSave = data;
            this.onLoad = false
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

    orderChange(){
        this.order = !this.order;
        this.filters["order"] = this.order ? "asc" : "desc";
        this.getWithFilters();
    }

    valueChange() {
        this.filters["launch_year"] = this.valueYear;
        this.getWithFilters();
    }

    getWithFilters() {
        this.spacexApi.getLaunchesWithFilters(this.filters).subscribe(data => {
            this.launches = data;
            this.launchesSave = data;
        });
    }
}
