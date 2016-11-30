export class OTWPDeserializedGroup {

  private _id: number;
  private _orgId: number;
  private _name: string;
  private _type: number;
  private _status: number;
  private _image: string;
  private _description: string;

  public constructor(rawData: any) {
    this._setId(rawData.id);
    this._setOrgId(rawData.org_id);
    this._setName(rawData.name);
    this._setType(rawData.type);
    this._setStatus(rawData.status);
    this._setImage(rawData.image);
    this._setDescription(rawData.description);
  }

  //region setters

  private _setId(value: number) {
    this._id = value;
  }

  private _setOrgId(value: number) {
    this._orgId = value;
  }

  private _setName(value: string) {
    this._name = value;
  }

  private  _setType(value: number) {
    this._type = value;
  }

  private _setStatus(value: number) {
    this._status = value;
  }

  private _setImage(value: string) {
    this._image = value;
  }

  private _setDescription(value: string) {
    this._description = value;
  }

  //endregion

  public getId(): number {
    return this._id;
  }

  public getOrgId(): number {
    return this._orgId;
  }

  public getName(): string {
    return this._name;
  }

  public getType(): number {
    return this._type;
  }

  public getStatus(): number {
    return this._status;
  }

  public getImage(): string {
    return this._image;
  }

  public getDescription(): string {
    return this._description;
  }
}