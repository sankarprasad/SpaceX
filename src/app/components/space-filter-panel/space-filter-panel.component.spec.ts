import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpaceFilterPanelComponent } from "./space-filter-panel.component";

describe("SpaceFilterPanelComponent", () => {
  let component: SpaceFilterPanelComponent;
  let fixture: ComponentFixture<SpaceFilterPanelComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ SpaceFilterPanelComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(SpaceFilterPanelComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
