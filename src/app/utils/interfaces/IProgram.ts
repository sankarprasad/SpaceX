export interface IProgram {
	mission_name: string,
	launch_year: string,
	launch_success: boolean,
	land_success: boolean,
	mission_id: string[],
	flight_number: number | string,
	links: {
		"mission_patch": string,
		"mission_patch_small": string,
		"article_link": string
	}
}