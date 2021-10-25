import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PUBLIC_ROUTES_NAMES } from "./enums/public.routes.names";

const routes:Routes = [
  {
    path: PUBLIC_ROUTES_NAMES.LOGIN,
    component: LoginComponent
  }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PublicRoutingModule {
  /**
   *
   */
  constructor() {
  }
}
