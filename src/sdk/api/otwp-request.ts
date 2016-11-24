import {OpenTimeWebPageSDK} from "./opentime-webpage-sdk";
import {HttpAppRequest} from "../libraries/http-app-request";

export class OTWPRequest {

    private _request: HttpAppRequest;

    public constructor(){
        this._request = new HttpAppRequest();
    }

    public getResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (responseObject) => void) {

        let key = OpenTimeWebPageSDK.getService().getAPIKey();

        if(key !== null && key !== ''){
            //this._request.setRequestHeader('API_KEY', OpenTimeWebPageSDK.getService().getAPIKey());
        }

        let url = OpenTimeWebPageSDK.getService().getEndpoint(api, apiMethod);

        this._request.getResponse(url, httpMethod, data, callback);
    }
}