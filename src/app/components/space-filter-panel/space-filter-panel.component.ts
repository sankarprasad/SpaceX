import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, of, Subscription } from "rxjs";
import { tap } from "rxjs/operators";
import { CommonService } from "src/app/service/common.service";

@Component({
	selector: "app-space-filter-panel",
	templateUrl: "./space-filter-panel.component.html",
	styleUrls: ["./space-filter-panel.component.scss"]
})
export class SpaceFilterPanelComponent implements OnInit {

	startYear = 2006;
	launchYearsArray = Array(14).fill(0).map((_, index) => index + this.startYear);
	urlObs$: Observable<{ [key: string]: null | string }> = of({
		launch_year: null,
		launch_success: null,
		land_success: null
	})
	constructor(private readonly common: CommonService) { }

	ngOnInit() {
		this.urlObs$ = this.common.urlObs$;
	}

	navigateTo(category: string, subcategory: number | string | boolean) {
		this.common.navigateTo(category, subcategory)
	}

}
