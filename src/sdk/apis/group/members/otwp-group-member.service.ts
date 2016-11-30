import { Injectable } from "@angular/core";
import { OTWPGroupMembersWithAvailabilityIndicatorResponse } from "./get-with-availability-indicator/otwp-group-members-with-availability-indicator-response";
import { OTWPRequest } from "../../../api/otwp-request";

@Injectable()
export class OTWPGroupMemberService {

  private static readonly API = 'group';

  public getMembersWithAvailabilityIndicator(groupID: number, callback: (response: OTWPGroupMembersWithAvailabilityIndicatorResponse) => void): void {
    let request = new OTWPRequest();
    request.getResponse(
      OTWPGroupMemberService.API,
      'getMembersWithAvailabilityIndicator/' + groupID,
      'POST', {
        sort: 'asc',
        query: '',
        page: ''
      },
      (responseObject: any) => {
        let response = new OTWPGroupMembersWithAvailabilityIndicatorResponse(responseObject);
        callback(response);
      }
    );
  }
}