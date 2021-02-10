import { Component, Input, OnInit } from "@angular/core";
import { IProgram } from "src/app/utils/interfaces/IProgram";

@Component({
	selector: "app-space-list-panel",
	templateUrl: "./space-list-panel.component.html",
	styleUrls: ["./space-list-panel.component.scss"],
	animations: []
})
export class SpaceListPanelComponent implements OnInit {

	@Input() spaceProgramList: IProgram[] = []
	@Input() loading = false;

	constructor() { }

	ngOnInit(): void { }

}
