import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SpaceListPanelComponent } from "./space-list-panel.component";

describe("SpaceListPanelComponent", () => {
  let component: SpaceListPanelComponent;
  let fixture: ComponentFixture<SpaceListPanelComponent>;

  beforeEach(async () => {
	await TestBed.configureTestingModule({
		declarations: [ SpaceListPanelComponent ]
	})
	.compileComponents();
  });

  beforeEach(() => {
	fixture = TestBed.createComponent(SpaceListPanelComponent);
	component = fixture.componentInstance;
	fixture.detectChanges();
  });

  it("should create", () => {
	expect(component).toBeTruthy();
  });
});
