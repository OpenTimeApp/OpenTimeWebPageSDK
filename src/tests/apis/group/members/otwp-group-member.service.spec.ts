import {OTWPGroupMemberService} from "../../../../sdk/apis/group/members/otwp-group-member.service";
import {TestHelper} from "../../../otwp-test-helper";
import {OTWPGroupMembersWithAvailabilityResponse} from "../../../../sdk/apis/group/members/get-with-availability/otwp-webpage-sdk-group-members-with-availability-response";


describe('Class: OTWPGroupMemberService', () => {
    beforeAll(() => {
        TestHelper.beforeAll();
    });

    let service: OTWPGroupMemberService;

    beforeEach(() => {
        service = new OTWPGroupMemberService();
    });

    describe('Method: getWithAvailability', () => {
        it("Should get list of group members with availability", (done) => {
            service.getWithAvailability(2, (response: OTWPGroupMembersWithAvailabilityResponse) => {
                // expect(response.getMembers.length).toBe(1);
                done();
            });
        })
    });
});