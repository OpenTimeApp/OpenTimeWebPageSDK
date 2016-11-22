import { OTWPGroupMemberService } from "../../../../sdk/apis/group/members/otwp-group-member.service";
import { TestHelper } from "../../../otwp-test-helper";
import { OTWPGroupMembersWithAvailabilityResponse } from "../../../../sdk/apis/group/members/get-with-availability/otwp-webpage-sdk-group-members-with-availability-response";


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

      let methodResponse: string;

      service.getWithAvailability(1, (responseData: string) => {
        methodResponse = responseData;
        expect(methodResponse).toEqual('fakeData');
        done();
      });
    })
  });


});