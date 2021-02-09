import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { tap } from "rxjs/operators";

@Component({
  selector: "app-space-filter-panel",
  templateUrl: "./space-filter-panel.component.html",
  styleUrls: ["./space-filter-panel.component.scss"]
})
export class SpaceFilterPanelComponent implements OnInit {

  startYear = 2006;
  launchYearsArray = Array(14).fill(0).map((el, index) => index + this.startYear);
  launch_year: any;
  launch_success: any;
  land_success: any;

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.route.queryParams
      .pipe(
        tap(param => {
          this.launch_year = null;
          this.launch_success = null;
          this.land_success = null;
          if ("launch_year" in param) {
            this.launch_year = param.launch_year
          }
          if ("launch_success" in param) {
            this.launch_success = param.launch_success
          }
          if ("land_success" in param) {
            this.land_success = param.land_success
          }
        })
      ).subscribe()
  }

  navigateTo(category: string, subcategory: number | string | boolean) {
    const cat: any = category;
    let subcat: any = subcategory;
    if (
      cat === "launch_year" && subcat == this.launch_year ||
      cat === "launch_success" && String(subcat) === String(this.launch_success) ||
      cat === "land_success" && String(subcat) === String(this.land_success)
    ) {
      subcat = null;
    }
    this.router.navigate(["/dashboard"], { queryParams: { [cat]: subcat }, queryParamsHandling: "merge" });
  }

}
