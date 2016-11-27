import {Injectable} from "@angular/core";
import {OTWPGroupMembersWithAvailabilityIndicatorResponse} from "./get-with-availability/otwp-group-members-with-availability-indicator-response";
import {OTWPRequest} from "../../../api/otwp-request";

@Injectable()
export class OTWPGroupMemberService {

	private static readonly API = 'group';

	getMembersWithAvailabilityIndicator(groupID: number, callback: (response: OTWPGroupMembersWithAvailabilityIndicatorResponse) => void): void {
		let request = new OTWPRequest();
		request.getResponse(
			OTWPGroupMemberService.API,
			'getMembersWithAvailabilityIndicator',
			'POST', {
				group_id: groupID,
				sort: 'asc',
				query: '',
				page: ''
			},
			(responseObject) => {
				let response = new OTWPGroupMembersWithAvailabilityIndicatorResponse(responseObject);
				callback(response);
			}
		);
	}
}