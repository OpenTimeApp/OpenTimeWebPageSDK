import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class OTWPHttpService {

  constructor(private _http: Http) {}

  exampleUrl = "http://opentimeapp.com/doctors.php?page=1&rows=5";

  //Promise example
  getDataToPromise() {
    return this._http.get(this.exampleUrl)
      .map(response => response.json())
      .toPromise()
  }

  //Observable example
  getDataAsObservable(){
    return this._http.get(this.exampleUrl)
      .map(response => response.json())
  }

}