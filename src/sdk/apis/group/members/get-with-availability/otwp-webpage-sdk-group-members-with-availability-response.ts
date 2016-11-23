import { OTWPDeserializedGroupMemberAvailability } from '../../../../deserializers/group/member/otwp-deserialized-group-member-availability'
import { OTWPResponse } from "../../../../api/otwp-response";


export class OTWPGroupMembersWithAvailabilityResponse extends OTWPResponse {

  private _members: Array<OTWPDeserializedGroupMemberAvailability>;

  constructor(rawData: any) {
    super(rawData);
    this._members = this._getDeserializeMembers(rawData.data);
  }

  public getMembers(): Array<OTWPDeserializedGroupMemberAvailability> {
    return this._members;
  }

  private _getDeserializeMembers(rawMembers: any): Array<OTWPDeserializedGroupMemberAvailability> {
    let deserializedMembers = [];
    for (let i = 0; i < rawMembers.length; i++) {
      let deserializedMember = new OTWPDeserializedGroupMemberAvailability(rawMembers[i]);
      deserializedMembers.push(deserializedMember);
    }
    return deserializedMembers;
  }
}