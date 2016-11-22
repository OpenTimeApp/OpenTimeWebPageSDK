import { OTWPDeserializedGroupMemberAvailability } from '../../../../deserializers/group/member/otwp-deserialized-group-member-availability'
import { OTWPResponse } from "../../../../api/otwp-response";

export class OTWPGroupMembersWithAvailabilityResponse extends OTWPResponse {

  private _members: Array<OTWPDeserializedGroupMemberAvailability>;

  constructor(rawData: any) {
    super(rawData);
    this._members = rawData.data;
  }

  public getMembers(): Array<OTWPDeserializedGroupMemberAvailability> {
    return this._members;
  }
}