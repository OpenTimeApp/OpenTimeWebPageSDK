import { OTWPGroupService } from "../../../sdk/apis/group/otwp-group.service";
import { TestHelper } from "../../otwp-test-helper";
import { OTWPGetGroupResponse } from "../../../sdk/apis/group/get-group/otwp-get-group-response";
import set = Reflect.set;

describe('Service: OTWPGroupService', () => {

  beforeAll((done) => {
    TestHelper.beforeAll();
    TestHelper.restoreData(['make_groups'], (response) => {
      if (!response.success) {
        fail(response.message);
      }
      done();
    });
  });

  let service: OTWPGroupService;

  beforeEach(() => {
    service = new OTWPGroupService();
  });

  describe('Method: getGroup ', () => {
    it('should return a group', (done) => {
      service.getGroup(1, (response: OTWPGetGroupResponse) => {
        expect(response.getSuccess()).toBe(true, response.getErrorMessages());
        if (response.getSuccess()) {

          let group = response.getGroup();

          expect(group.getId()).toBe(1);
          expect(group.getOrgId()).toBe(1);
          expect(group.getName()).toBe("The Oneders");
          expect(group.getType()).toBe(1);
          expect(group.getStatus()).toBe(1);
          expect(group.getImage()).toBe("https://s3-us-west-2.amazonaws.com/test-opentime-group-images/abc.123");
          expect(group.getDescription()).toBe("The best band of all time");

        }
        done();
      });
    })
  });

});