import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { Router } from "@angular/router";

import { ReposComponent } from "@components/repos/repos.component";
import { AuthenticationService } from "@services/auth.service";
import { InitialPipe } from "@pipes/initial.pipe";
import { ReposService } from "@services/repos.service";
import { of } from "rxjs";

describe("ReposComponent", () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReposComponent, InitialPipe],
      providers: [AuthenticationService],
      imports: [RouterTestingModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", async(
    inject(
      [Router, AuthenticationService],
      (router: Router, auth: AuthenticationService) => {
        expect(component).toBeTruthy();
      }
    )
  ));

  it("should call logout", async(
    inject(
      [Router, AuthenticationService],
      (router: Router, auth: AuthenticationService) => {
        spyOn(auth, "logout");
        spyOn(router, "navigate");
        component.logout();
        expect(auth.logout).toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalled();
      }
    )
  ));

  it("should get a list of repositories", async(
    inject([ReposService], (ReposService: ReposService) => {
      const response: [] = [];
      spyOn(ReposService, "getRepos").and.returnValue(of(response));
      component.ngOnInit();
      fixture.detectChanges();
      expect(component.repositories).toEqual(response);
    })
  ));
});
