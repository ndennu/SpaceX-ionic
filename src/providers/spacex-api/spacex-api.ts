import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch } from '../../app/models/Launch';
import { Capsule } from '../../app/models/Capsule';
import { Launchpad } from '../../app/models/Launchpad';
import { CompanyHistory } from '../../app/models/CompanyHistory';
import { About } from '../../app/models/About';
import { Rocket } from '../../app/models/Rocket';


@Injectable()
export class SpacexApiProvider {

    private baseUrl = "https://api.spacexdata.com/v2";

    constructor(private http: HttpClient) {
        console.log('Hello SpacexApiProvider Provider');
    }

    getAllCapsules(): Observable<Capsule[]> {
        const endPointUrl = `${this.baseUrl}/capsules`;
        return this.http.get<Capsule[]>(endPointUrl);
    }

    getAllLaunches(): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/launches/all?order=desc`;
        return this.http.get<Launch[]>(endPointUrl);
    }

    getAllLaunchpads(): Observable<Launchpad[]> {
        const endPointUrl = `${this.baseUrl}/launchpads`;
        return this.http.get<Launchpad[]>(endPointUrl);
    }

    getAllRockets(): Observable<Rocket[]> {
        const endPointUrl = `${this.baseUrl}/rockets`;
        return this.http.get<Rocket[]>(endPointUrl);
    }

    getInfoCompagny(): Observable<About> {
        const endPointUrl = `${this.baseUrl}/info`;
        return this.http.get<About>(endPointUrl);
    }

    getTimeLineCompagny(): Observable<CompanyHistory[]> {
        const endPointUrl = `${this.baseUrl}/info/history?order=desc`;
        return this.http.get<CompanyHistory[]>(endPointUrl);
    }

    getLatestLaunch(): Observable<Launch>{
        const endPointUrl = `${this.baseUrl}/launches/latest`;
        return this.http.get<Launch>(endPointUrl);
    }

    getNextLaunch(): Observable<Launch>{
        const endPointUrl = `${this.baseUrl}/launches/next`;
        return this.http.get<Launch>(endPointUrl);
    }

    getUpcomingLaunches(): Observable<Launch[]>{
        const endPointUrl = `${this.baseUrl}/launches/upcoming`;
        return this.http.get<Launch[]>(endPointUrl);
    }


    getLaunchById(id: number): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/launches?flight_number=${id}`;
        return this.http.get<Launch[]>(endPointUrl);
    }

    getCapsuleById(id: string): Observable<Capsule> {
        const endPointUrl = `${this.baseUrl}/capsules/${id}`;
        return this.http.get<Capsule>(endPointUrl);
    }

    getRocketById(id: string): Observable<Rocket> {
        const endPointUrl = `${this.baseUrl}/rockets/${id}`;
        return this.http.get<Rocket>(endPointUrl);
    }

    getLaunchPadById(id: string): Observable<Launchpad> {
        const endPointUrl = `${this.baseUrl}/launchpads/${id}`;
        return this.http.get<Launchpad>(endPointUrl);
    }

    getUpcomingById(id: number): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/launches/upcoming?flight_number=${id}`;
        return this.http.get<Launch[]>(endPointUrl);
    }
}