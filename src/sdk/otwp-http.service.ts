import { Injectable } from "@angular/core";

@Injectable()

export class OTWPHttpService {

  constructor() {
  }

  http = new XMLHttpRequest();

  url = "http://opentimeapp.com/doctors.php?page=1&rows=5";
  method = 'GET';

  getDoctors(callback) {
    this.http.open(this.method, this.url);
    this.http.onreadystatechange = () => {
      if (this.http.readyState === XMLHttpRequest.DONE) {
        callback(JSON.parse(this.http.responseText));
      }
    };
    this.http.send();
  }

}