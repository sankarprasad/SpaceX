import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { SpaceFilterPanelComponent } from "./components/space-filter-panel/space-filter-panel.component";
import { SpaceListPanelComponent } from "./components/space-list-panel/space-list-panel.component";
import { HttpClientModule } from "@angular/common/http";
import { CommonService } from "./service/common.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AppShellRenderDirective } from "./directives/app-shell-render.directive";
import { AppShellNoRenderDirective } from "./directives/app-shell-norender.directive";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

@NgModule({
	declarations: [
		AppComponent,
		SpaceFilterPanelComponent,
		SpaceListPanelComponent,
		DashboardComponent,
		AppShellRenderDirective,
		AppShellNoRenderDirective
	],
	imports: [
		BrowserModule.withServerTransition({ appId: "serverApp" }),
		HttpClientModule,
		AppRoutingModule,
		StoreModule.forRoot({}, {}),
		ServiceWorkerModule.register("ngsw-worker.js", { enabled: environment.production })
	],
	providers: [CommonService],
	bootstrap: [AppComponent],
})
export class AppModule { }
