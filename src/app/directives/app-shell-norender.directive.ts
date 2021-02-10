import {
	Directive, Inject, OnInit, PLATFORM_ID,
	TemplateRef, ViewContainerRef
} from "@angular/core";
import { isPlatformServer } from "@angular/common";

@Directive({
	selector: "[appShellNoRender]"
})
export class AppShellNoRenderDirective implements OnInit {

	constructor(
		@Inject(PLATFORM_ID) private readonly platformId: any,
		private readonly templateRef: TemplateRef<any>,
		private readonly viewContainer: ViewContainerRef
	) {

	}

	ngOnInit() {
		if (isPlatformServer(this.platformId)) {
			this.viewContainer.clear();
		}
		else {
			this.viewContainer.createEmbeddedView(this.templateRef);
		}

	}

}