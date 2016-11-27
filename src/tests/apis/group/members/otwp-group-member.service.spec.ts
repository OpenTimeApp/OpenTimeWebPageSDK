import { OTWPGroupMemberService } from "../../../../sdk/apis/group/members/otwp-group-member.service";
import { TestHelper } from "../../../otwp-test-helper";
import { OTWPGroupMembersWithAvailabilityIndicatorResponse } from "../../../../sdk/apis/group/members/get-with-availability/otwp-group-members-with-availability-indicator-response";

describe('Class: OTWPGroupMemberService', () => {

  beforeAll((done) => {
    TestHelper.beforeAll();
    TestHelper.restoreData(['make_users', 'make_groups'], (response) => {
    	if (!response.success){
    		fail(response.message);
			}
			done();
    });
  });

  let service: OTWPGroupMemberService;

  beforeEach(() => {
    service = new OTWPGroupMemberService();
  });

  describe('Method: getMembersWithAvailabilityIndicator', () => {
    it("Should get list of group members with an availability indicator", (done) => {
      service.getMembersWithAvailabilityIndicator(1, (response: OTWPGroupMembersWithAvailabilityIndicatorResponse) => {
        expect(response.getMembers().length).toBe(1);

        let members = response.getMembers();
        let member1 = members[0];

        expect(member1.getFirstName()).toBe('Mr');
        expect(member1.getLastName()).toBe('Tester');
        expect(member1.getSummary()).toContain('Likes long walks in the desert on a wet day');
        expect(member1.getProfileImg()).toBe("https://s3-us-west-2.amazonaws.com/test-opentime-profile-images/92444a0191b4ce13dcea205125514526.png");
        expect(member1.isAvailable()).toBe(false);

        done();
      });
    })
  });
});