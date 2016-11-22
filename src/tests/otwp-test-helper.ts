import { OpenTimeWebPageSDK } from "../sdk/api/opentime-webpage-sdk";
import testAPI = require('./test-config');
export class TestHelper {
  public static beforeAll() {
    OpenTimeWebPageSDK.initService(testAPI.config.api_key, true);
    OpenTimeWebPageSDK.getService().setServer(testAPI.config.server);
  }
}