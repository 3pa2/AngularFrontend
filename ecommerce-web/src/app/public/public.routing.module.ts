import { NgModule } from "@angular/core";
import type { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { PUBLIC_ROUTES_NAMES } from "./enums/public.routes.names";

const routes:Routes = [
  {
    path:"",redirectTo:PUBLIC_ROUTES_NAMES.LOGIN, pathMatch:"full"
  },
  {
    path: PUBLIC_ROUTES_NAMES.LOGIN,
    component: LoginComponent
  }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class PublicRoutingModule {}
