import { OTWPResponse } from "../../../api/otwp-response";
import { OTWPDeserializedGroup } from "../../../deserializers/group/otwp-deserialized-group";

export class OTWPGetGroupResponse extends OTWPResponse {

  private _group: OTWPDeserializedGroup;

  constructor(rawData: any) {
    super(rawData);
    if (this.getSuccess()) {
      this._group = new OTWPDeserializedGroup(rawData.data);
    }
  }

  public getGroup(): OTWPDeserializedGroup {
    return this._group;
  }

}