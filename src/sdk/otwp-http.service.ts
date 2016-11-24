import { Injectable } from "@angular/core";

@Injectable()

export class OTWPHttpService {

  public constructor() {}

  http = new XMLHttpRequest();

  public getResponse(url: string, method: string, data: any, callback: (data) => void){

    let finalUrl = url;

    // Convert data object into query string
    if(method.toUpperCase() === 'GET' && !url.includes('?')){
      finalUrl += '?' + Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');
    }

    this.http.open(method, finalUrl, true);

    this.http.onreadystatechange = () => {
      if (this.http.readyState === XMLHttpRequest.DONE) {
        callback(JSON.parse(this.http.responseText));
      }
    };

    this.http.send(data);
  }
}