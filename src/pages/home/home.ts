import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Launch } from '../../app/models/Launch';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchDetailsPage } from '../launch-details/launch-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nextLaunch: Launch;
  latestLaunch: Launch;
  
  upcomingLaunches: Launch[];

  strNextLaunchTimer: string;
  strLatestLaunchTime: string;
  upcomingTimer: { [launch: number]: string; } = {};

  constructor(
    private navCtrl: NavController,
    private spacexApi: SpacexApiProvider
  ) {

    this.spacexApi.getNextLaunch().subscribe(data => {
      this.nextLaunch = data;

      this.getNextLaunchRemainingTime();
    });

    this.spacexApi.getLatestLaunch().subscribe(data => {
      this.latestLaunch = data;

      let diffInMs: number = Date.parse(new Date().toUTCString()) - Date.parse(this.latestLaunch.launch_date_utc.toString());
      this.timePast(diffInMs);
    });

    this.spacexApi.getUpcomingLaunches().subscribe(data => {
      this.upcomingLaunches = data;

      this.getUpcomingRemainingTime();
    });
  }

  launchDetails(launch: Launch): void{
    this.navCtrl.push(LaunchDetailsPage, launch);
  }

  getNextLaunchRemainingTime(): void{
    setTimeout(() => {
      let diffInMs: number = Date.parse(this.nextLaunch.launch_date_utc.toString()) - Date.parse(new Date().toUTCString());
      this.strNextLaunchTimer = this.formatTime(diffInMs);
      this.getNextLaunchRemainingTime();
    }, 1000);
  }

  getUpcomingRemainingTime(): void{
    setTimeout(() => {
      this.upcomingLaunches.forEach(launch => {
        let diffInMs: number = Date.parse(launch.launch_date_utc.toString()) - Date.parse(new Date().toUTCString());
        this.upcomingTimer[launch.flight_number] = this.formatTime(diffInMs);
      });

      this.getUpcomingRemainingTime();
    }, 1000);
  }

  private timePast(msTime: number): void{
    var tmp = Math.trunc(msTime / 1000);
    var s = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var m = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var h =  tmp % 24;

    tmp = Math.trunc(tmp / 24)
    var d = tmp % 365;

    var y = Math.trunc(tmp / 365);

    if(y > 0){
      this.strLatestLaunchTime = y + " years ago";
    } 
    else if(d > 0){
      this.strLatestLaunchTime = d + " days ago";
    }
    else if(h > 0){
      this.strLatestLaunchTime = h + " hours ago";
    }
    else if(m > 0){
      this.strLatestLaunchTime = m + " minutes ago";
    }
    else if(s > 0){
      this.strLatestLaunchTime = s + " seconds ago";
    }
  }

  private formatTime(msTime: number): string{

    var res: string = "";

    var tmp = Math.trunc(msTime / 1000);
    var s = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var m = tmp % 60;

    tmp = Math.trunc(tmp / 60);
    var h =  tmp % 24;

    tmp = Math.trunc(tmp / 24)
    var d = tmp % 365;

    var y = Math.trunc(tmp / 365);

    if(y > 0){
      res += y + "y ";
    }

    if(d > 0){
      res += d + "d ";
    }

    if(h > 0){
      res += h + "h ";
    }

    if(m > 0){
      res += m + "m ";
    }

    if(s > 0){
      res += s + "s ";
    }

    return res;
  }

}
