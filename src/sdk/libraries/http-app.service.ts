import {Injectable} from "@angular/core";
import {OpenTimeWebPageSDK} from "../api/opentime-webpage-sdk";

@Injectable()

export class HttpAppService {

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

                try {
                    let jsonData = JSON.parse(this._http.responseText);

                    callback(jsonData);
                } catch (e) {

                    let errorMessage = {
                        success: false,
                        message: "The server did not return a valid JSON response",
                        data: null
                    };

                    console.error("The server did not return a valid JSON response for url: " + url);

                    callback(errorMessage);
                }
            }
        };

        this._http.send(data);
    }

    public setRequestHeader(header: string, value: string) {
        this._http.setRequestHeader(header, value);
    }
}