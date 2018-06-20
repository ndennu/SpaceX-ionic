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
  remainingTime: string;

  constructor(
    private navCtrl: NavController, 
    private navParams: NavParams)
  {
    this.launch = this.navParams.data;

    if(this.launch.launch_success == null){
      this.getRemainingTime();
    }
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
