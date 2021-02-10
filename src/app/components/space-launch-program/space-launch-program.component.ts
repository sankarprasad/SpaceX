import { Component, Input, OnInit } from "@angular/core";
import { IProgram } from "src/app/utils/interfaces/IProgram";

@Component({
	selector: "app-space-launch-program",
	templateUrl: "./space-launch-program.component.html",
	styleUrls: ["./space-launch-program.component.scss"]
})
export class SpaceLaunchProgramComponent implements OnInit {

	@Input() program: IProgram | undefined = undefined;

	constructor() { }

	ngOnInit(): void { }

}
