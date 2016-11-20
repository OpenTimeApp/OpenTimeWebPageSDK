import { OpenTimeWebPageSDK } from "../src/api/opentime-webpage-sdk";
export class TestHelper{
  public static beforeAll(){
    OpenTimeWebPageSDK.initService(testAPIConfig.api_key, true);
    OpenTimeWebPageSDK.getService().setServer(testAPIConfig.server);
  }
}