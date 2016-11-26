import {OpenTimeWebPageSDK} from "../sdk/api/opentime-webpage-sdk";
import {HttpAppRequest} from "../sdk/libraries/http-app-request";
import testAPI = require('./test-config');
export class TestHelper {
	public static beforeAll() {
		OpenTimeWebPageSDK.initService(testAPI.config.api_key, true);
		OpenTimeWebPageSDK.getService().setServer(testAPI.config.server);
	}

	public static restoreData(scripts: Array<string>, callback: (response) => void) {
		let request = new HttpAppRequest();
		let script = scripts.join(',');;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

		request.getResponse(
			OpenTimeWebPageSDK.getService().getServer() + '/restore/restore.php',
			'GET',
			{api_key: OpenTimeWebPageSDK.getService().getAPIKey(), script: script},
			(response) => {
				callback(response);
			}
		);
	}
}