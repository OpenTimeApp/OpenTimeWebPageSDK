import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import { OTWPGroupMembersWithAvailabilityResponse } from 'get-with-availability/otwp-webpage-sdk-group-members-with-availability-response.ts'

@Injectable()
export class OTWPGroupMemberService {

  getWithAvailability(groupID: number, callback: (response: OTWPGroupMembersWithAvailabilityResponse) => void): void {

  }

}