import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Launch, Rocket } from '../../app/models/Launch';
import { Capsule } from '../../app/models/Capsule';
import { Launchpad } from '../../app/models/Launchpad';
import { CompanyHistory } from '../../app/models/CompanyHistory';


@Injectable()
export class SpacexApiProvider {

    private baseUrl = "https://api.spacexdata.com/v2";

    constructor(private http: HttpClient) {
        console.log('Hello SpacexApiProvider Provider');
    }

    getAllCapsules(): Observable<Capsule[]> {
        const endPointUrl = `${this.baseUrl}/launches/all`;
        return this.http.get<Capsule[]>(endPointUrl);
    }

    getAllLaunches(): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/capsules`;
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

    getTimeLineCompagny(): Observable<CompanyHistory[]> {
        const endPointUrl = `${this.baseUrl}/info/history`;
        return this.http.get<CompanyHistory[]>(endPointUrl);
    }

    // DETAILS

    /*getCapsule(id: string): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/capsules/${id}`;
        return this.http.get<Launch[]>(endPointUrl);
    }

    getLaunch(): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/launches/all`;
        return this.http.get<Launch[]>(endPointUrl);
    }

    getLaunchpad(id: string): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/launchpads/${id}`;
        return this.http.get<Launch[]>(endPointUrl);
    }

    getRocket(id: string): Observable<Launch[]> {
        const endPointUrl = `${this.baseUrl}/rockets/${id}`;
        return this.http.get<Launch[]>(endPointUrl);
    }*/

}