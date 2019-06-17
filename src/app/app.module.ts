import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { Router } from "./app.routes";
import { ReposComponent } from "@components/repos/repos.component";
import { LoginComponent } from "@components/login/login.component";

@NgModule({
  declarations: [
    AppComponent, 
    ReposComponent, 
    LoginComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    Router
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
