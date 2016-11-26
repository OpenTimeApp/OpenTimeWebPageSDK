export class OTWPDeserializedGroupMemberAvailability {

	private _firstName: string;
	private _lastName: string;
	private _img: string;
	private _summary: string;
	private _isAvailable: boolean;

	public constructor(rawData: any) {
		this._setFirstName(rawData.first_name);
		this._setLastName(rawData.last_name);
		this._setImg(rawData.img);
		this._setSummary(rawData.summary);
		this._setIsAvailable(rawData.is_available);
	}

	private _setFirstName(value: string) {
		this._firstName = value;
	}

	private _setLastName(value: string) {
		this._lastName = value;
	}

	private _setImg(value: string) {
		this._img = value;
	}

	private _setSummary(value: string) {
		this._summary = value;
	}

	private _setIsAvailable(value: boolean) {
		this._isAvailable = value;
	}

	public getFirstName(): string {
		return this._firstName;
	}

	public getLastName(): string {
		return this._lastName;
	}

	public getProfileImg(): string {
		return this._img;
	}

	public getSummary(): string {
		return this._summary;
	}

	public isAvailable(): boolean {
		return this._isAvailable;
	}
}