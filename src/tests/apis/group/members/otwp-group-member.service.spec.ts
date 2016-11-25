import {OTWPGroupMemberService} from "../../../../sdk/apis/group/members/otwp-group-member.service";
import {TestHelper} from "../../../otwp-test-helper";
import {OTWPGroupMembersWithAvailabilityResponse} from "../../../../sdk/apis/group/members/get-with-availability/otwp-webpage-sdk-group-members-with-availability-response";


describe('Class: OTWPGroupMemberService', () => {

    beforeAll((done) => {
        TestHelper.beforeAll();
        TestHelper.restoreData(['make_groups'], (response) => {
            console.log(response);
            if (response.success) {
                done();
            } else {
                xit(response.message);
            }
        });
    });

    let service: OTWPGroupMemberService;

    beforeEach(() => {
        service = new OTWPGroupMemberService();
    });

    describe('Method: getWithAvailability', () => {
        it("Should get list of group members with availability", (done) => {
            service.getWithAvailability(2, (response: OTWPGroupMembersWithAvailabilityResponse) => {
                // expect(response.getMembers().length).toBe(1);
                //
                // let members = response.getMembers();
                // let member1 = members[0];
                //
                // expect(member1.getFirstName()).toBe('Josh');
                // expect(member1.getLastName()).toBe('Woodcock');
                // expect(member1.getSummary()).toContain('Likes long walks in the desert on a wet day');
                // expect(member1.getProfileImg()).toBe("https://s3-us-west-2.amazonaws.com/test-opentime-profile-images/92444a0191b4ce13dcea205125514526.png");
                // expect(member1.isAvailable()).toBe(false);

                done();
            });
        })
    });
});