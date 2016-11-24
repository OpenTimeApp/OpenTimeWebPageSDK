import {Injectable} from "@angular/core";
import {OpenTimeWebPageSDK} from "./api/opentime-webpage-sdk";

@Injectable()

export class OTWPHttpService {

    public constructor() {}

    private _http = new XMLHttpRequest();

    public getResponse(url: string, method: string, data: any, callback: (response) => void) {

        let finalUrl = url;

        // Convert data object into query string
        if (method.toUpperCase() === 'GET' && !url.includes('?')) {
            finalUrl += '?' + Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join('&');
        }

        this._http.open(method, finalUrl, true);

        this._http.onreadystatechange = () => {
            if (this._http.readyState === XMLHttpRequest.DONE) {
                callback(JSON.parse(this._http.responseText));
            }
        };

        this._http.send(data);
    }

    public getAPIResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (response) => void) {

        let key = OpenTimeWebPageSDK.getService().getAPIKey();

        if(key !== null && key !== ''){
            this.setRequestHeader('API_KEY', OpenTimeWebPageSDK.getService().getAPIKey());
        }

        let url = OpenTimeWebPageSDK.getService().getEndpoint(api, apiMethod);

        this.getResponse(url, httpMethod, data, callback);
    }

    public setRequestHeader(header: string, value: string) {
        this._http.setRequestHeader(header, value);
    }
}