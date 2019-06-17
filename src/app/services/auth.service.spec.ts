import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { of } from "rxjs";

import { AuthenticationService } from "@services/auth.service";

describe("AuthService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    })
  );

  it("should be created", () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it("should get a token from github", () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    const httpMock: HttpTestingController = TestBed.get(HttpTestingController);

    service.getToken("abcabc").subscribe((data: any) => {
      expect(data.access_token).toBe("abcabc");
    });

    const req = httpMock.expectOne(
      `/api/login/oauth/access_token`
    );
    expect(req.request.method).toBe("POST");

    req.flush({
      access_token: "abcabc"
    });

    httpMock.verify();
  });

  it("should delete localstorage on logout", () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    service.logout();
    expect(localStorage.getItem("currentToken")).toBeNull();
  });


  it("should can access currentTokenValue", () => {
    const service: AuthenticationService = TestBed.get(AuthenticationService);
    expect(service.currentTokenValue).toBeTruthy();
  });
});
