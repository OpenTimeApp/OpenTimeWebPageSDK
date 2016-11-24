import { Injectable } from "@angular/core";
import { Http, ConnectionBackend, RequestMethod, RequestOptions } from "@angular/http";
import 'rxjs/Rx';

@Injectable()

export class OTWPHttpService {

  constructor() {}

  _connectionBackend = ConnectionBackend();
  _options = new RequestOptions({
    method: RequestMethod.Get,
    url: 'http://opentimeapp.com/doctors.php?page=1&rows=5'
  });

  exampleUrl = "http://opentimeapp.com/doctors.php?page=1&rows=5";

  http = new Http(this._connectionBackend, this._options);

  //Promise example
  getDataToPromise() {
    return this.http.get(this.exampleUrl)
      .map(response => response.json())
      .toPromise()
  }

  //Observable example
  getDataAsObservable() {
    return this.http.get(this.exampleUrl)
      .map(response => response.json())
  }

}