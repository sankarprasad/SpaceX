import { HttpClient } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs/internal/observable/of";
import { SpaceFilterPanelComponent } from "./space-filter-panel.component";

describe("SpaceFilterPanelComponent", () => {
	let component: SpaceFilterPanelComponent;
	let fixture: ComponentFixture<SpaceFilterPanelComponent>;
	const router = jasmine.createSpyObj("Router", ["navigate"]);
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SpaceFilterPanelComponent],
			providers: [{ provide: Router, useValue: router }, {
				provide: ActivatedRoute,
				useValue: {
					queryParams: of({}),
				}
			}],
			imports: [HttpClient]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SpaceFilterPanelComponent);
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
