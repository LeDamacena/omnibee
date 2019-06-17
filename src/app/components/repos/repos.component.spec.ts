import {
  async,
  ComponentFixture,
  TestBed,
  inject,
  tick
} from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Router } from "@angular/router";

import { ReposComponent } from "@components/repos/repos.component";
import { AuthenticationService } from "@services/auth.service";

describe("ReposComponent", () => {
  let component: ReposComponent;
  let fixture: ComponentFixture<ReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReposComponent],
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
});
