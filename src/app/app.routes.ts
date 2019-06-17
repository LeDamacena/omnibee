import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "@components/login/login.component";
import { ReposComponent } from "@components/repos/repos.component";
import { AuthGuard } from "@guards/auth.guard";

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "repositories", component: ReposComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo: "repositories", pathMatch: "full" },
  { path: "**", redirectTo: "" }
];

export const Router = RouterModule.forRoot(appRoutes);
