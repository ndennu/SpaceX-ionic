import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../app/models/Launch';
import { RocketDetailsPage } from '../rocket-details/rocket-details';
import { SpacexApiProvider } from '../../providers/spacex-api/spacex-api';
import { LaunchpadDetailsPage } from '../launchpad-details/launchpad-details';


@IonicPage()
@Component({
  selector: 'page-launch-details',
  templateUrl: 'launch-details.html',
})
export class LaunchDetailsPage {

  launch: Launch;
  remainingTime: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams,
    private spacexApi: SpacexApiProvider)
  {
    var id = this.navParams.data;

    this.spacexApi.getLaunchById(id).subscribe(data => {
        this.launch = data[0];
        if (this.launch == undefined) {
          this.spacexApi.getUpcomingById(id).subscribe(data => {
            this.launch = data[0];
            if(this.launch.launch_success == null){
              this.getRemainingTime();
            }
          });
        } else {
          if(this.launch.launch_success == null){
            this.getRemainingTime();
          }
        }
    });  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailsPage');
  }

  getRemainingTime(): void{
    setTimeout(() => {
      let diffInMs: number = Date.parse(this.launch.launch_date_utc.toString()) - Date.parse(new Date().toUTCString());
      this.remainingTime = this.formatTime(diffInMs);
      this.getRemainingTime();
    }, 1000);
  }

  goRocketDetails(launch: Launch): void {
    this.navCtrl.push(RocketDetailsPage, launch.rocket.rocket_id);
  }

  goLaunchpadDetails(launch: Launch): void {
    this.navCtrl.push(LaunchpadDetailsPage, launch.launch_site.site_id);
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
