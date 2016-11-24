import {Injectable} from "@angular/core";
import {OpenTimeWebPageSDK} from "./opentime-webpage-sdk";
import {HttpAppService} from "../libraries/http-app.service";

@Injectable()

export class OTWPHttpService extends HttpAppService {

    public getAPIResponse(api: string, apiMethod, httpMethod: string, data: any, callback: (response) => void) {

        let key = OpenTimeWebPageSDK.getService().getAPIKey();

        if(key !== null && key !== ''){
            this.setRequestHeader('API_KEY', OpenTimeWebPageSDK.getService().getAPIKey());
        }

        let url = OpenTimeWebPageSDK.getService().getEndpoint(api, apiMethod);

        this.getResponse(url, httpMethod, data, callback);
    }
}