import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, filter, switchMap, finalize, tap } from "rxjs/operators";
import { CommonService } from "src/app/service/common.service";

@Component({
	selector: "app-dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit {

	programs: any = [];
	loading = false;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly common: CommonService,
	) { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.route.queryParams
			.pipe(
				map(paramObj => {
					this.loading = true;
					this.programs.length = 0;
					let paramString = "?limit=100";
					for (const key in paramObj) {
						paramString += `&${key}=${paramObj[key]}`
					}
					return paramString
				}),
				filter(params => !!params),
				switchMap(res => this.common.fetchData(res)),
				map(res => Object.values(res)),
				tap(_ => this.loading = false)
			)
			.subscribe(res => {
				this.programs = res;
			})
	}

}
