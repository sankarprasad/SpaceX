import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { shareReplay } from "rxjs/operators";

@Injectable({
	providedIn: "root"
})
export class CommonService {

	constructor(private readonly http: HttpClient) { }

	fetchData(urlstring: string = "") {
		const url = urlstring ? `https://api.spacexdata.com/v3/launches${urlstring}` : `https://api.spacexdata.com/v3/launches?limit=100`
		return this.http.get(url).pipe(shareReplay())
	}

}
