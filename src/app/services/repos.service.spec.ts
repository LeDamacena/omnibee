import { TestBed } from "@angular/core/testing";

import { ReposService } from "@services/repos.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe("ReposService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: ReposService = TestBed.get(ReposService);
    expect(service).toBeTruthy();
  });

  it("should get a list of repositories", () => {
    const service: ReposService = TestBed.get(ReposService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    service.getRepos("abc").subscribe((data: any) => {
      expect(data).toEqual([{ name: "repositories" }]);
    });

    const req = httpMock.expectOne('https://api.github.com/user/repos?access_token=abc');
    expect(req.request.method).toBe("GET");

    req.flush([{ name: "repositories" }]);

    httpMock.verify();
  });
});
