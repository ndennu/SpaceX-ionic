import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SpacexApiProvider {

  private baseUrl = "https://api.spacexdata.com/v2";

  constructor(private http: HttpClient) {
    console.log('Hello SpacexApiProvider Provider');
  }

  getAllLaucnhes() : Observable<any>{
    const endPointUrl = `${this.baseUrl}/launches/all`;
    return this.http.get(endPointUrl);
  }

}