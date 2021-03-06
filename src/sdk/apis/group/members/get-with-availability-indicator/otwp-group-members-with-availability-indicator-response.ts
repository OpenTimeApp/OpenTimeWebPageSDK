import { OTWPDeserializedGroupMemberAvailability } from "../../../../deserializers/group/member/otwp-deserialized-group-member-availability";
import { OTWPResponse } from "../../../../api/otwp-response";

export class OTWPGroupMembersWithAvailabilityIndicatorResponse extends OTWPResponse {

  private _members: Array<OTWPDeserializedGroupMemberAvailability>;

  constructor(rawData: any) {
    super(rawData);
    if (this.getSuccess()) {
      this._members = OTWPGroupMembersWithAvailabilityIndicatorResponse._getDeserializeMembers(rawData.data);
    }
  }

  public getMembers(): Array<OTWPDeserializedGroupMemberAvailability> {
    return this._members;
  }

  private static _getDeserializeMembers(rawMembers: Array<any>): Array<OTWPDeserializedGroupMemberAvailability> {
    let deserializedMembers = [];
    for (let i = 0; i < rawMembers.length; i++) {
      let rawMember = rawMembers[i];
      let deserializedMember = new OTWPDeserializedGroupMemberAvailability(rawMember);
      deserializedMembers.push(deserializedMember);
    }
    return deserializedMembers;
  }
}