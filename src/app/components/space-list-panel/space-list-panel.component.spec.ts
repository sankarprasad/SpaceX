// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpaceListPanelComponent } from './space-list-panel.component';
import { CommonService } from 'src/app/service/common.service';

describe('SpaceListPanelComponent', () => {
	let component: SpaceListPanelComponent;
	let fixture: ComponentFixture<SpaceListPanelComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule, ReactiveFormsModule],
			declarations: [
				SpaceListPanelComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
			providers: [

			]
		}).overrideComponent(SpaceListPanelComponent, {

		}).compileComponents();
		fixture = TestBed.createComponent(SpaceListPanelComponent);
		component = fixture.debugElement.componentInstance;
	});

	afterEach(() => {

		fixture.destroy();
	});

	it('should run #constructor()', async () => {
		expect(component).toBeTruthy();
	});

	it('should run #ngOnInit()', async () => {

	});

});
