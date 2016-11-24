import { TestBed, async } from '@angular/core/testing'
import { OTWPHttpService } from "../sdk/otwp-http.service";
import { HttpModule } from "@angular/http";

let _otwpHttpService;

describe('Service: OTWPHttpService', () => {
  //Retrieve a service using TestBed
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [OTWPHttpService]
    });
    _otwpHttpService = TestBed.get(OTWPHttpService);
  });

  describe("Method: getData", () => {

    //Unit test example of a promise
    it('should return doctors as Promise', async(() => {
      _otwpHttpService.getDataToPromise().then(
        (data) => {
          expect(data.length).toEqual(5);
          data.forEach((doctor) => {
            expect(doctor.name).toBeTruthy();
            expect(doctor.address).toBeTruthy();
            expect(doctor.phone).toBeTruthy();
            expect(doctor.email).toBeTruthy();
          })
        }
      )
    }));


    //Unit test example of an observable
    it('should return doctors as Observable', async(() => {
      _otwpHttpService.getDataAsObservable().subscribe(
        (data) => {
          expect(data.length).toEqual(5);
          data.forEach((doctor) => {
            expect(doctor.name).toBeTruthy();
            expect(doctor.address).toBeTruthy();
            expect(doctor.phone).toBeTruthy();
            expect(doctor.email).toBeTruthy();
          })
        }
      )
    }));

  })
});