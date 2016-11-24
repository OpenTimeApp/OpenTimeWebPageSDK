import { OTWPHttpService } from "../sdk/otwp-http.service";

let httpService;

describe('Service: OTWPHttpService', () => {

  beforeEach(() => {
    httpService = new OTWPHttpService();
  });

  describe("Method: getDoctors", () => {

    it("should return doctors", (done) => {

      httpService.getResponse('http://opentimeapp.com/doctors.php', 'GET', {'page':1, 'rows': 5 }, (data) => {

        expect(data.length).toEqual(5);

        let doctor1 = data[0];
        expect(doctor1.name).toBe('Dan Pink, MD.');
        expect(doctor1.address).toBe('1284 Marsh Lane, Sunnyville, CA, 75283');
        expect(doctor1.phone).toBe('407 758-2938');
        expect(doctor1.email).toBe('pinkanddink@pinky.co');

        data.forEach((doctor) => {
          expect(doctor.name).toBeTruthy();
          expect(doctor.address).toBeTruthy();
          expect(doctor.phone).toBeTruthy();
          expect(doctor.email).toBeTruthy();
        });

        done();
      });
    })
  })
});