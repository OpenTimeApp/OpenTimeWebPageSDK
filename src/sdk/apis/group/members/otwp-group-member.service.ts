import { Injectable } from '@angular/core';
import { OTWPGroupMembersWithAvailabilityResponse } from './get-with-availability/otwp-webpage-sdk-group-members-with-availability-response';
import {OTWPRequest} from "../../../api/otwp-request";

@Injectable()
export class OTWPGroupMemberService {

  private static readonly API = 'group';

  getWithAvailability(groupID: number, callback: (response: OTWPGroupMembersWithAvailabilityResponse) => void): void {
      let request = new OTWPRequest();
      request.getResponse(
          OTWPGroupMemberService.API,
          'getMembersWithAvailability',
          'POST', {
              group_id:groupID,
              sort: 'asc',
              query: '',
              page: ''
          },
          (responseObject) => {
              let response = new OTWPGroupMembersWithAvailabilityResponse(responseObject);
              callback(response);
          }
      );
  }
}