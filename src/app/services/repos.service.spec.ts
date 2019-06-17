import { TestBed } from "@angular/core/testing";

import { ReposService } from "@services/repos.service";
import { HttpClientTestingModule } from "@angular/common/http/testing";

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
});
