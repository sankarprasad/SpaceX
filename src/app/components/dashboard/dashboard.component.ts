import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { map, filter, switchMap, tap } from "rxjs/operators";
import { CommonService } from "src/app/service/common.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {

	programs: any = [];
	loading = false;
	routeSub: Subscription = new Subscription();

	constructor(
		private readonly route: ActivatedRoute,
		private readonly common: CommonService,
	) { }

	ngOnInit() {
		this.routeSub = this.route.queryParams
			.pipe(
				map(paramObj => {
					this.loading = true;
					this.programs.length = 0;
					let paramString = "?limit=100";
					for (const key in paramObj) {
						if (paramObj.hasOwnProperty(key)) {
							paramString += `&${key}=${paramObj[key]}`
						}
					}
					return paramString
				}),
				filter(params => !!params),
				switchMap(res => this.common.fetchData(res)),
				map(res => Object.values(res).map(item => ({ ...item, land_success: item.rocket?.first_stage.cores?.[0].land_success }))),
				tap(res => {
					this.loading = false;
					this.programs = res
				}))
			.subscribe()
	}

	ngOnDestroy() {
		this.routeSub.unsubscribe()
	}
}
