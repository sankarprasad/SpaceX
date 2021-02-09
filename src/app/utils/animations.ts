import {
	trigger,
	style,
	transition,
	animate,
	query,
	stagger,
	keyframes, group
} from "@angular/animations";

export const listAnimation = trigger("listAnimation", [
	transition("* => *", [
		query(":enter", style({ opacity: 0 }), { optional: true }),

		query(
			":enter",
			stagger("250ms", [
				animate(
					"1s ease-in",
					keyframes([
						style({
							opacity: 0,
							transform: "translateY(-55%) scale(0.3)",
							offset: 0
						}),
						style({
							opacity: 0,
							transform: "translateY(100px)",
							offset: 0.2
						}),
						style({ opacity: 1, transform: "translateY(0)", offset: 1.0 })
					])
				)
			]),
			{ optional: true }
		)
	])
]);