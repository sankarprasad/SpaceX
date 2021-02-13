import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import { CommonService } from "src/app/service/common.service";
import { IProgram } from "src/app/utils/interfaces/IProgram";

@Component({
	selector: "app-space-list-panel",
	templateUrl: "./space-list-panel.component.html",
	styleUrls: ["./space-list-panel.component.scss"]
})
export class SpaceListPanelComponent implements OnInit {

	loadingPrograms$: Observable<IProgram[]> = of([]);
	loading$: Observable<boolean> = of(false);

	constructor(private readonly common: CommonService) { }

	ngOnInit(): void {
		this.loadingPrograms$ = this.common.fetchData();
		this.loading$ = this.common.loading$;
	}

}
