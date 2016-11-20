import { OTWPConstant } from "./otwp-constant";
export class OpenTimeWebPageSDK {
  private static _sdk: OpenTimeWebPageSDK = null;

  private _apiKey: string;
  private _inTestMode: boolean;
  private _server: string;

  constructor(apiKey: string, inTestMode: boolean) {
    this._apiKey = apiKey;
    this._inTestMode = inTestMode;
    this._server = inTestMode ? OTWPConstant.TEST_SERVER : OTWPConstant.LIVE_SERVER;
  }

  public static getService(): OpenTimeWebPageSDK {
    if (OpenTimeWebPageSDK._sdk !== null) {
      return OpenTimeWebPageSDK._sdk;
    } else {
      throw new Error("OpenTimeWebPageSDK not initialized");
    }
  }

  public static initService(apiKey: string, inTestMode: boolean = false): void {
    OpenTimeWebPageSDK._sdk = new OpenTimeWebPageSDK(apiKey, inTestMode);
  }

  public getEndpoint(api: string, method: string): string {
    let endpoint: string = this._server + OTWPConstant.API_BASE_URL + '/' + api;
    if (method !== '') {
      endpoint += '/' + method;
    }
    return endpoint;
  }

  public setServer(server: string): void {
    this._server = server;
  }
}