import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
	path: "dashboard",
	component: DashboardComponent,
	pathMatch: "prefix"
  },
  {
	path: "",
	redirectTo: "/dashboard",
	pathMatch: "full"
  }, {
	path: "*",
	redirectTo: "/dashboard",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
	initialNavigation: "enabled"
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
