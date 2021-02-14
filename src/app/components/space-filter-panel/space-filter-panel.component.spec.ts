import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { of } from "rxjs/internal/observable/of";
import { CommonService } from "src/app/service/common.service";
import { SpaceFilterPanelComponent } from "./space-filter-panel.component";

describe("SpaceFilterPanelComponent", () => {
	let component: SpaceFilterPanelComponent;
	let fixture: ComponentFixture<SpaceFilterPanelComponent>;
	const router = jasmine.createSpyObj("Router", ["navigate"]);
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [SpaceFilterPanelComponent],
			providers: [{ provide: Router, useValue: router },
			{
				provide: CommonService, useValue: {
					urlObs$: of({
						launch_year: "2006",
						launch_success: null,
						land_success: null
					})
				}
			}]
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

	it("should run #ngOnInit()", async () => {
		const common = fixture.debugElement.injector.get(CommonService);
		component.urlObs$ = common.urlObs$
		component.urlObs$.subscribe(res => {
			expect(res.launch_year).toEqual("2006");
		})
	});

	it("should navigate to", async () => {
		const category = "launch_year";
		const subcategory = "2006"
		spyOn(component, "navigateTo")
		component.navigateTo(category, subcategory);
		expect(component.navigateTo).toHaveBeenCalled();
	})
});
