import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpaceLaunchProgramComponent } from "./space-launch-program.component";

describe("SpaceLaunchProgramComponent", () => {
	let component: SpaceLaunchProgramComponent;
	let fixture: ComponentFixture<SpaceLaunchProgramComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SpaceLaunchProgramComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceLaunchProgramComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
	// new test by ngentest
	it("should run #ngOnInit()", async () => {
		component.ngOnInit();
	});
});
