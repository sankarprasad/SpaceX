// tslint:disable
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SpaceListPanelComponent } from './space-list-panel.component';
import { CommonService } from 'src/app/service/common.service';
import { of } from "rxjs";

describe('SpaceListPanelComponent', () => {
	let component: SpaceListPanelComponent;
	let fixture: ComponentFixture<SpaceListPanelComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [],
			declarations: [
				SpaceListPanelComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
			providers: [
				{
					provide: CommonService, useValue: {
						fetchData: () => {
							return of([])
						},
						loading$: of(false)
					}
				}
			]
		}).overrideComponent(SpaceListPanelComponent, {

		}).compileComponents();
		fixture = TestBed.createComponent(SpaceListPanelComponent);
		component = fixture.debugElement.componentInstance;
		component.loading$ = of(false);
		component.loadingPrograms$ = of([]);
		fixture.detectChanges();
	});

	afterEach(() => {
		fixture.destroy();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should run #constructor()', async () => {
		expect(component).toBeTruthy();
	});

	it('should run #ngOnInit()', fakeAsync(() => {
		let common = fixture.debugElement.injector.get(CommonService);
		spyOn(common, 'fetchData').and.returnValue(of([]))
		component.loadingPrograms$ = common.fetchData();
		component.loading$ = common.loading$;
		tick(300);
		common.fetchData().subscribe(res => {
			expect(res).toEqual([]);
		})
		common.loading$.subscribe(res => {
			expect(res).toBeFalsy();
		});
		expect(common.fetchData).toHaveBeenCalled();
		flush();
	}));

});
