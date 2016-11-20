///<reference path="/typings/tsd.d.ts"/>
import { OTWPGroupMemberService } from "../../../../src/apis/group/members/otwp-group-member.service";
import { TestHelper } from "../../../otwp-test-helper";
import { OTWPGroupMembersWithAvailabilityResponse } from "../../../../src/apis/group/members/get-with-availability/otwp-webpage-sdk-group-members-with-availability-response";


describe('Class: OTWPGroupMemberService', () => {
  beforeAll(() => {
    TestHelper.beforeAll();
  });

  let service: OTWPGroupMemberService;

  beforeEach(() => {
    service = new OTWPGroupMemberService;
  });

  describe('Method: getWithAvailability', () => {
    it("Should get list of group members with availability", () => {

      let callback = jasmine.createSpy("Service callback");
      let methodResponse: OTWPGroupMembersWithAvailabilityResponse;

      service.getWithAvailability(1, (response: OTWPGroupMembersWithAvailabilityResponse) => {
        methodResponse = response;
        callback.call(null);
      });

      waitsFor(()=>{
        return callback.wasCalled
      }, "Service timed out", 5000);

      runs(() => {
        expect(methodResponse.getMembers().length).toBe(5);
      })
    })
  });


});