import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { tap } from "rxjs/operators";

@Component({
	selector: "app-space-filter-panel",
	templateUrl: "./space-filter-panel.component.html",
	styleUrls: ["./space-filter-panel.component.scss"]
})
export class SpaceFilterPanelComponent implements OnInit, AfterViewInit, OnDestroy {

	startYear = 2006;
	launchYearsArray = Array(14).fill(0).map((el, index) => index + this.startYear);
	launchYear: any;
	launchSuccess: any;
	landSuccess: any;
	routeSub: Subscription = new Subscription();

	constructor(
		private readonly router: Router,
		private readonly route: ActivatedRoute
	) { }

	ngOnInit(): void { }

	ngAfterViewInit() {
		this.routeSub = this.route.queryParams
			.pipe(
				tap(param => {
					this.launchYear = null;
					this.launchSuccess = null;
					this.landSuccess = null;
					if ("launch_year" in param) {
						this.launchYear = param.launch_year
					}
					if ("launch_success" in param) {
						this.launchSuccess = param.launch_success
					}
					if ("land_success" in param) {
						this.landSuccess = param.land_success
					}
				})
			).subscribe()
	}

	navigateTo(category: string, subcategory: number | string | boolean) {
		const cat: any = category;
		let subcat: any = subcategory;
		if (
			cat === "launch_year" && String(subcat) === String(this.launchYear) ||
			cat === "launch_success" && String(subcat) === String(this.launchSuccess) ||
			cat === "land_success" && String(subcat) === String(this.landSuccess)
		) {
			subcat = null;
		}
		this.router.navigate(["/dashboard"], { queryParams: { [cat]: subcat }, queryParamsHandling: "merge" });
	}

	ngOnDestroy() {
		this.routeSub.unsubscribe();
	}

}
