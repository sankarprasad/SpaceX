import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { BehaviorSubject, throwError } from "rxjs";
import { catchError, map, shareReplay, switchMap, tap } from "rxjs/operators";
import { URL } from "../utils/interfaces/constant";
@Injectable({
	providedIn: "root"
})
export class CommonService {
	launchYear: null;
	launchSuccess: null;
	landSuccess: null;
	urlObj: { [key: string]: null | string } = {
		launch_year: null,
		launch_success: null,
		land_success: null
	}

	private readonly urlSubject = new BehaviorSubject(this.urlObj);
	public urlObs$ = this.urlSubject.asObservable();

	private readonly loadingSubject = new BehaviorSubject<boolean>(false);
	public loading$ = this.loadingSubject.asObservable();

	constructor(
		private readonly http: HttpClient,
		private readonly route: ActivatedRoute,
		private readonly router: Router
	) { }

	fetchData() {
		return this.route.queryParams
			.pipe(
				tap(_ => this.loadingSubject.next(true)),
				map(paramObj => this.buildUrl(paramObj)),
				switchMap(url => this.http.get(url)),
				shareReplay(),
				map(res => Object.values(res).map(item => ({ ...item, land_success: item?.rocket?.first_stage.cores?.[0].land_success }))),
				tap(_ => this.loadingSubject.next(false)),
				catchError(error => throwError(error))
			)
	}

	buildUrl(paramObj: Params) {
		let paramString = "?limit=100";
		this.urlObj = {
			launch_year: null,
			launch_success: null,
			land_success: null
		}
		for (const key in paramObj) {
			if (paramObj.hasOwnProperty(key)) {
				this.urlObj = { ...this.urlObj, [key]: paramObj[key] }
				paramString += `&${key}=${paramObj[key]}`
			}
		}
		this.urlSubject.next(this.urlObj);
		return paramString ? `${URL}${paramString}` : `${URL}?limit=100`
	}

	navigateTo(category: string, subcategory: number | string | boolean) {
		const cat: string = category.toString();
		let subcat: string | null = subcategory.toString();
		if (subcat === this.urlObj[cat]) {
			subcat = null;
		}
		this.router.navigate(["/dashboard"], { queryParams: { [cat]: subcat }, queryParamsHandling: "merge" });
	}

	getUrlTree() {
		return this.urlObj;
	}


}
