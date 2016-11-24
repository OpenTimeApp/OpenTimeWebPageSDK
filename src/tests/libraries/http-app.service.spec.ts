import {HttpAppService} from "../../sdk/libraries/http-app.service";

let httpService;

describe('Service: HttpAppService', () => {

  beforeEach(() => {
    httpService = new HttpAppService();
  });

  describe("Method: getDoctors", () => {

    it("should return doctors", (done) => {

      httpService.getResponse('http://opentimeapp.com/doctors.php', 'GET', {'page':1, 'rows': 5 }, (response) => {

        expect(response.length).toEqual(5);

        let doctor1 = response[0];
        expect(doctor1.name).toBe('Dan Pink, MD.');
        expect(doctor1.address).toBe('1284 Marsh Lane, Sunnyville, CA, 75283');
        expect(doctor1.phone).toBe('407 758-2938');
        expect(doctor1.email).toBe('pinkanddink@pinky.co');

        response.forEach((doctor) => {
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