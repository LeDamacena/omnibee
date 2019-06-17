import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "@services/auth.service";
import { ReposService } from "@services/repos.service";

@Component({
  selector: "app-repos",
  templateUrl: "./repos.component.html",
  styleUrls: ["./repos.component.scss"]
})
export class ReposComponent implements OnInit {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private reposService: ReposService
  ) {}

  repositories: [] = [];

  ngOnInit() {
    let token = JSON.parse(localStorage.getItem("currentToken"));
    this.reposService.getRepos(token.access_token).subscribe(repos => {
      this.repositories = repos;
    });
  }

  isTrackBy (index, item) {
    return item.id;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
