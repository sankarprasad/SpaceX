// tslint:disable
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


import { DashboardComponent } from './dashboard.component';


describe('DashboardComponent', () => {
	let component: DashboardComponent;
	let fixture: ComponentFixture<DashboardComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [
				DashboardComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
		}).overrideComponent(DashboardComponent, {

		}).compileComponents();
		fixture = TestBed.createComponent(DashboardComponent);
		component = fixture.debugElement.componentInstance;
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should run #constructor()', async () => {
		expect(component).toBeTruthy();
	});

});
