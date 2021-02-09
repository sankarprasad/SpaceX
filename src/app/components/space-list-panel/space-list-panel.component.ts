import { Component, Input, OnInit } from "@angular/core";
import { listAnimation } from "src/app/utils/animations";
import { IProgram } from "src/app/utils/interfaces/IProgram";

@Component({
	selector: "app-space-list-panel",
	templateUrl: "./space-list-panel.component.html",
	styleUrls: ["./space-list-panel.component.scss"],
	animations: [listAnimation]
})
export class SpaceListPanelComponent implements OnInit {

	@Input() spaceProgramList: IProgram[] = []
	@Input() loading = false;

	constructor() { }

	ngOnInit(): void {
		console.log("spaceProgramList", this.spaceProgramList)
	}

}
