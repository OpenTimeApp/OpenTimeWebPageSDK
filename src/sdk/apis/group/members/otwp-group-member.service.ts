import { Injectable } from '@angular/core';
import { OTWPGroupMembersWithAvailabilityResponse } from './get-with-availability/otwp-webpage-sdk-group-members-with-availability-response';

@Injectable()
export class OTWPGroupMemberService {
  getWithAvailability(groupID: number, callback: (responseData: string) => void): void {
    let rawData = {
      "success": false, "message": "hello", "data": []
    };

    let responseData:string = 'fakeData';
    // let responseData = new OTWPGroupMembersWithAvailabilityResponse(rawData);

    setTimeout( () => {
      callback(responseData);
    });
  }
}