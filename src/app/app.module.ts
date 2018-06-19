import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpacexApiProvider } from '../providers/spacex-api/spacex-api';
import { HttpClientModule } from '@angular/common/http';
import { LaunchListPage } from '../pages/launch-list/launch-list';
import { CapsuleDetailsPage } from '../pages/capsule-details/capsule-details';
import { CapsuleListPage } from '../pages/capsule-list/capsule-list';
import { CompagnyInfoPage } from '../pages/compagny-info/compagny-info';
import { LaunchDetailsPage } from '../pages/launch-details/launch-details';
import { LaunchpadDetailsPage } from '../pages/launchpad-details/launchpad-details';
import { LaunchpadListPage } from '../pages/launchpad-list/launchpad-list';
import { RocketDetailsPage } from '../pages/rocket-details/rocket-details';
import { RocketListPage } from '../pages/rocket-list/rocket-list';
import { TimelineComponent } from '../components/timeline/timeline';
import { TimelineTimeComponent } from '../components/timeline/timeline';
import { TimelineItemComponent } from '../components/timeline/timeline';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CapsuleDetailsPage,
    CapsuleListPage,
    CompagnyInfoPage,
    LaunchDetailsPage,
    LaunchListPage,
    LaunchpadDetailsPage,
    LaunchpadListPage,
    RocketDetailsPage,
    RocketListPage,
    TimelineComponent,
    TimelineItemComponent,
    TimelineTimeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CapsuleDetailsPage,
    CapsuleListPage,
    CompagnyInfoPage,
    LaunchDetailsPage,
    LaunchListPage,
    LaunchpadDetailsPage,
    LaunchpadListPage,
    RocketDetailsPage,
    RocketListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpacexApiProvider
  ]
})
export class AppModule { }
