import { Injectable } from "@angular/core";
import { OTWPRequest } from "../../api/otwp-request";
import { OTWPGetGroupResponse } from "./get-group/otwp-get-group-response";

@Injectable()

export class OTWPGroupService {

  private static readonly API = 'group';

  public getGroup(groupID: number, callback: (response: OTWPGetGroupResponse) => void): void {
    let request = new OTWPRequest();

    request.getResponse(
      OTWPGroupService.API,
      'profile/' + groupID,
      'GET',
      {},
      (responseObject: any) => {
        let response = new OTWPGetGroupResponse(responseObject);
        callback(response);
      }
    )
  }

}