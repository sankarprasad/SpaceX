import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { CommonService } from "./common.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { ActivatedRoute, Router } from "@angular/router";
import { of } from "rxjs";

// tslint:disable-next-line: max-line-length
export const PL_MOCK = JSON.parse(JSON.stringify([
	{
		flight_number: 1,
		mission_name: "FalconSat",
		mission_id: [],
		upcoming: false,
		launch_year: "2006",
		launch_date_unix: 1143239400,
		launch_date_utc: "2006-03-24T22:30:00.000Z",
		launch_date_local: "2006-03-25T10:30:00+12:00",
		is_tentative: false,
		tentative_max_precision: "hour",
		tbd: false,
		launch_window: 0,
		rocket: {
			rocket_id: "falcon1",
			rocket_name: "Falcon 1",
			rocket_type: "Merlin A",
			first_stage: {
				cores: [
					{
						core_serial: "Merlin1A",
						flight: 1,
						block: null,
						gridfins: false,
						legs: false,
						reused: false,
						land_success: null,
						landing_intent: false,
						landing_type: null,
						landing_vehicle: null
					}
				]
			},
			second_stage: {
				block: 1,
				payloads: [
					{
						payload_id: "FalconSAT-2",
						norad_id: [],
						reused: false,
						customers: [
							"DARPA"
						],
						nationality: "United States",
						manufacturer: "SSTL",
						payload_type: "Satellite",
						payload_mass_kg: 20,
						payload_mass_lbs: 43,
						orbit: "LEO",
						orbit_params: {
							reference_system: "geocentric",
							regime: "low-earth",
							longitude: null,
							semi_major_axis_km: null,
							eccentricity: null,
							periapsis_km: 400,
							apoapsis_km: 500,
							inclination_deg: 39,
							period_min: null,
							lifespan_years: null,
							epoch: null,
							mean_motion: null,
							raan: null,
							arg_of_pericenter: null,
							mean_anomaly: null
						}
					}
				]
			},
			fairings: {
				reused: false,
				recovery_attempt: false,
				recovered: false,
				ship: null
			}
		},
		ships: [],
		telemetry: {
			flight_club: null
		},
		launch_site: {
			site_id: "kwajalein_atoll",
			site_name: "Kwajalein Atoll",
			site_name_long: "Kwajalein Atoll Omelek Island"
		},
		launch_success: false,
		launch_failure_details: {
			time: 33,
			altitude: null,
			reason: "merlin engine failure"
		},
		links: {
			mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
			mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
			reddit_campaign: null,
			reddit_launch: null,
			reddit_recovery: null,
			reddit_media: null,
			presskit: null,
			article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
			wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
			video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
			youtube_id: "0a_00nJ_Y88",
			flickr_images: []
		},
		details: "Engine failure at 33 seconds and loss of vehicle",
		static_fire_date_utc: "2006-03-17T00:00:00.000Z",
		static_fire_date_unix: 1142553600,
		timeline: {
			webcast_liftoff: 54
		},
		crew: null
	},
	{
		flight_number: 2,
		mission_name: "DemoSat",
		mission_id: [],
		launch_year: "2007",
		launch_date_unix: 1174439400,
		launch_date_utc: "2007-03-21T01:10:00.000Z",
		launch_date_local: "2007-03-21T13:10:00+12:00",
		is_tentative: false,
		tentative_max_precision: "hour",
		tbd: false,
		launch_window: 0,
		rocket: {
			rocket_id: "falcon1",
			rocket_name: "Falcon 1",
			rocket_type: "Merlin A",
			first_stage: {
				cores: [
					{
						core_serial: "Merlin2A",
						flight: 1,
						block: null,
						gridfins: false,
						legs: false,
						reused: false,
						land_success: null,
						landing_intent: false,
						landing_type: null,
						landing_vehicle: null
					}
				]
			},
			second_stage: {
				block: 1,
				payloads: [
					{
						payload_id: "DemoSAT",
						norad_id: [],
						reused: false,
						customers: [
							"DARPA"
						],
						nationality: "United States",
						manufacturer: "SpaceX",
						payload_type: "Satellite",
						payload_mass_kg: null,
						payload_mass_lbs: null,
						orbit: "LEO",
						orbit_params: {
							reference_system: "geocentric",
							regime: "low-earth",
							longitude: null,
							semi_major_axis_km: null,
							eccentricity: null,
							periapsis_km: null,
							apoapsis_km: null,
							inclination_deg: null,
							period_min: null,
							lifespan_years: null,
							epoch: null,
							mean_motion: null,
							raan: null,
							arg_of_pericenter: null,
							mean_anomaly: null
						}
					}
				]
			},
			fairings: {
				reused: false,
				recovery_attempt: false,
				recovered: false,
				ship: null
			}
		},
		ships: [],
		telemetry: {
			flight_club: null
		},
		launch_site: {
			site_id: "kwajalein_atoll",
			site_name: "Kwajalein Atoll",
			site_name_long: "Kwajalein Atoll Omelek Island"
		},
		launch_success: false,
		launch_failure_details: {
			time: 301,
			altitude: 289,
			reason: "harmonic oscillation leading to premature engine shutdown"
		},
		links: {
			mission_patch: "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
			mission_patch_small: "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
			reddit_campaign: null,
			reddit_launch: null,
			reddit_recovery: null,
			reddit_media: null,
			presskit: null,
			article_link: "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
			wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
			video_link: "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
			youtube_id: "Lk4zQ2wP-Nc",
			flickr_images: []
		},
		details: "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
		upcoming: false,
		static_fire_date_utc: null,
		static_fire_date_unix: null,
		timeline: {
			webcast_liftoff: 60
		},
		crew: null
	},
	{
		flight_number: 14,
		mission_name: "CRS-3",
		mission_id: [
			"EE86F74"
		],
		launch_year: "2014",
		launch_date_unix: 1397849100,
		launch_date_utc: "2014-04-18T19:25:00.000Z",
		launch_date_local: "2014-04-18T15:25:00-04:00",
		is_tentative: false,
		tentative_max_precision: "hour",
		tbd: false,
		launch_window: 0,
		rocket: {
			rocket_id: "falcon9",
			rocket_name: "Falcon 9",
			rocket_type: "v1.1",
			first_stage: {
				cores: [
					{
						core_serial: "B1006",
						flight: 1,
						block: 1,
						gridfins: false,
						legs: true,
						reused: false,
						land_success: true,
						landing_intent: true,
						landing_type: "Ocean",
						landing_vehicle: null
					}
				]
			},
			second_stage: {
				block: 1,
				payloads: [
					{
						payload_id: "CRS-3",
						norad_id: [
							39680
						],
						cap_serial: "C105",
						reused: false,
						customers: [
							"NASA (CRS)"
						],
						nationality: "United States",
						manufacturer: "SpaceX",
						payload_type: "Dragon 1.1",
						payload_mass_kg: 2296,
						payload_mass_lbs: 5062,
						orbit: "ISS",
						orbit_params: {
							reference_system: "geocentric",
							regime: "low-earth",
							longitude: null,
							semi_major_axis_km: 6700.881,
							eccentricity: 0.0013819,
							periapsis_km: 313.486,
							apoapsis_km: 332.006,
							inclination_deg: 51.6429,
							period_min: 90.982,
							lifespan_years: null,
							epoch: "2014-04-18T19:40:03.000Z",
							mean_motion: 15.82724147,
							raan: 34.0918,
							arg_of_pericenter: 268.425,
							mean_anomaly: 162.2575
						},
						mass_returned_kg: 1600,
						mass_returned_lbs: 3500,
						flight_time_sec: 2592000,
						cargo_manifest: "https://en.wikipedia.org/wiki/SpaceX_CRS-3#Primary_payload_and_downmass"
					}
				]
			},
			fairings: null
		},
		ships: [
			"AMERICANISLANDER"
		],
		telemetry: {
			flight_club: null
		},
		launch_site: {
			site_id: "ccafs_slc_40",
			site_name: "CCAFS SLC 40",
			site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
		},
		launch_success: true,
		links: {
			mission_patch: "https://images2.imgbox.com/ff/81/EOWojaSj_o.png",
			mission_patch_small: "https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png",
			reddit_campaign: null,
			reddit_launch: "http://www.reddit.com/r/spacex/comments/22zo8c",
			reddit_recovery: null,
			reddit_media: null,
			presskit: "http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf",
			article_link: "https://newatlas.com/crs-3-launch-spacex/31671/",
			wikipedia: "https://en.wikipedia.org/wiki/SpaceX_CRS-3",
			video_link: "https://www.youtube.com/watch?v=Od-lON4bTyQ",
			youtube_id: "Od-lON4bTyQ",
			flickr_images: [
				"https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg",
				"https://farm9.staticflickr.com/8597/16856369125_e97cd30ef7_o.jpg",
				"https://farm8.staticflickr.com/7586/16166732954_9338dc859c_o.jpg",
				"https://farm8.staticflickr.com/7603/16855223522_462da54e84_o.jpg",
				"https://farm8.staticflickr.com/7618/16234010894_e1210ec300_o.jpg",
				"https://farm8.staticflickr.com/7617/16855338881_69542a2fa9_o.jpg"
			]
		},
		details: "Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.",
		upcoming: false,
		static_fire_date_utc: "2014-03-08T00:00:00.000Z",
		static_fire_date_unix: 1394236800,
		timeline: {
			webcast_liftoff: 2400,
			go_for_prop_loading: -2280,
			rp1_loading: -2100,
			stage1_lox_loading: -2100,
			stage2_lox_loading: -960,
			engine_chill: -420,
			prelaunch_checks: -60,
			propellant_pressurization: -60,
			go_for_launch: -45,
			ignition: -3,
			liftoff: 0,
			maxq: 60,
			meco: 180,
			stage_sep: 180,
			second_stage_ignition: 180,
			"seco-1": 540,
			dragon_separation: 600,
			dragon_solar_deploy: 720,
			dragon_bay_door_deploy: 8400
		},
		crew: null
	},
	{
		flight_number: 99,
		mission_name: "Starlink-9 (v1.0) & BlackSky Global 5-6",
		mission_id: [],
		launch_year: "2020",
		launch_date_unix: 1596777120,
		launch_date_utc: "2020-08-07T05:12:00.000Z",
		launch_date_local: "2020-08-07T01:12:00-04:00",
		is_tentative: false,
		tentative_max_precision: "hour",
		tbd: false,
		launch_window: null,
		rocket: {
			rocket_id: "falcon9",
			rocket_name: "Falcon 9",
			rocket_type: "FT",
			first_stage: {
				cores: [
					{
						core_serial: "B1051",
						flight: 5,
						block: 5,
						gridfins: true,
						legs: true,
						reused: true,
						land_success: true,
						landing_intent: true,
						landing_type: "ASDS",
						landing_vehicle: "OCISLY"
					}
				]
			},
			second_stage: {
				block: 5,
				payloads: [
					{
						payload_id: "Starlink-9",
						norad_id: [
							45657,
							45658,
							45659,
							45660,
							45661,
							45662,
							45663,
							45664,
							45665,
							45666,
							45667,
							45668,
							45669,
							45670,
							45671,
							45672,
							45673,
							45674,
							45675,
							45676,
							45677,
							45678,
							45679,
							45680,
							45681,
							45682,
							45683,
							45684,
							45685,
							45686,
							45687,
							45688,
							45689,
							45690,
							45691,
							45692,
							45693,
							45694,
							45695,
							45696,
							45697,
							45698,
							45699,
							45700,
							45701,
							45702,
							45703,
							45704,
							45705,
							45706,
							45707,
							45708,
							45709,
							45710,
							45711,
							45712,
							45713,
							45714,
							45715,
							45716,
							45730,
							45731,
							45732,
							45733,
							45734,
							45735,
							45736,
							45737,
							45738,
							45739,
							45740,
							45741,
							45742,
							45743,
							45744,
							45745,
							45746,
							45747,
							45748,
							45749,
							45750,
							45751
						],
						reused: false,
						customers: [
							"SpaceX"
						],
						nationality: "United States",
						manufacturer: "SpaceX",
						payload_type: "Satellite",
						payload_mass_kg: 15080,
						payload_mass_lbs: 33245.7,
						orbit: "VLEO",
						orbit_params: {
							reference_system: "geocentric",
							regime: "very-low-earth",
							longitude: null,
							semi_major_axis_km: null,
							eccentricity: null,
							periapsis_km: null,
							apoapsis_km: null,
							inclination_deg: null,
							period_min: null,
							lifespan_years: null,
							epoch: null,
							mean_motion: null,
							raan: null,
							arg_of_pericenter: null,
							mean_anomaly: null
						}
					},
					{
						payload_id: "BlackSky Global 5-6",
						norad_id: [],
						reused: false,
						customers: [
							"BlackSky Global"
						],
						nationality: "United States",
						manufacturer: "BlackSky Global",
						payload_type: "Satellite",
						payload_mass_kg: 110,
						payload_mass_lbs: 242.5,
						orbit: "SSO",
						orbit_params: {
							reference_system: "geocentric",
							regime: "sun-synchronous",
							longitude: null,
							semi_major_axis_km: null,
							eccentricity: null,
							periapsis_km: null,
							apoapsis_km: null,
							inclination_deg: null,
							period_min: null,
							lifespan_years: null,
							epoch: null,
							mean_motion: null,
							raan: null,
							arg_of_pericenter: null,
							mean_anomaly: null
						}
					}
				]
			},
			fairings: {
				reused: null,
				recovery_attempt: true,
				recovered: true,
				ship: "GOMSTREE"
			}
		},
		ships: [
			"GOMSCHIEF",
			"GOMSTREE",
			"OCISLY"
		],
		telemetry: {
			flight_club: null
		},
		launch_site: {
			site_id: "ksc_lc_39a",
			site_name: "KSC LC 39A",
			site_name_long: "Kennedy Space Center Historic Launch Complex 39A"
		},
		launch_success: true,
		links: {
			mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
			mission_patch_small: "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
			reddit_campaign: "https://www.reddit.com/r/spacex/comments/h8mold/starlink9_launch_campaign_thread/",
			reddit_launch: "https://www.reddit.com/r/spacex/comments/i4ozw3/rspacex_starlink9_launch_discussion_updates/",
			reddit_recovery: "https://www.reddit.com/r/spacex/comments/i5smhk/starlink_9blacksky_recovery_thread/",
			reddit_media: "https://www.reddit.com/r/spacex/comments/hg499n/rspacex_starlink9_media_thread_photographer/",
			presskit: null,
			article_link: "https://spaceflightnow.com/2020/08/07/spacex-closes-out-busy-week-with-launch-of-more-starlink-satellites",
			wikipedia: "https://en.wikipedia.org/wiki/Starlink",
			video_link: "https://youtu.be/KU6KogxG5BE",
			youtube_id: "KU6KogxG5BE",
			flickr_images: [
				"https://live.staticflickr.com/65535/50198901143_0bb53a499e_o.jpg",
				"https://live.staticflickr.com/65535/50199448011_35d0e9c8bf_o.jpg",
				"https://live.staticflickr.com/65535/50199715777_eca6f41d25_o.jpg"
			]
		},
		details: "This mission will launch the ninth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the tenth Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes a rideshare of two BlackSky satellites on top of the Starlink stack. The booster for this mission is expected to land an ASDS.",
		upcoming: false,
		static_fire_date_utc: "2020-06-24T18:18:00.000Z",
		static_fire_date_unix: 1593022680,
		timeline: null,
		crew: null,
		last_date_update: "2020-08-04T02:33:44.000Z",
		last_ll_launch_date: null,
		last_ll_update: null,
		last_wiki_launch_date: "2020-08-07T05:12:00.000Z",
		last_wiki_revision: "ea423e3d-d5fa-11ea-ad99-0e82730e990d",
		last_wiki_update: "2020-08-04T02:33:44.000Z",
		launch_date_source: "wiki"
	},
	{
		flight_number: 100,
		mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
		mission_id: [],
		launch_year: "2020",
		launch_date_unix: 1597761060,
		launch_date_utc: "2020-08-18T14:31:00.000Z",
		launch_date_local: "2020-08-18T10:31:00-04:00",
		is_tentative: false,
		tentative_max_precision: "hour",
		tbd: false,
		launch_window: 0,
		rocket: {
			rocket_id: "falcon9",
			rocket_name: "Falcon 9",
			rocket_type: "FT",
			first_stage: {
				cores: [
					{
						core_serial: "B1049",
						flight: 6,
						block: 5,
						gridfins: true,
						legs: true,
						reused: true,
						land_success: true,
						landing_intent: true,
						landing_type: "ASDS",
						landing_vehicle: "OCISLY"
					}
				]
			},
			second_stage: {
				block: 5,
				payloads: [
					{
						payload_id: "Starlink-10",
						norad_id: [
							45730,
							45731,
							45732,
							45733,
							45734,
							45735,
							45736,
							45737,
							45738,
							45739,
							45740,
							45741,
							45742,
							45743,
							45744,
							45745,
							45746,
							45747,
							45748,
							45749,
							45750,
							45751
						],
						reused: false,
						customers: [
							"SpaceX"
						],
						nationality: "United States",
						manufacturer: "SpaceX",
						payload_type: "Satellite",
						payload_mass_kg: 15400,
						payload_mass_lbs: 33951.2,
						orbit: "VLEO",
						orbit_params: {
							reference_system: "geocentric",
							regime: "very-low-earth",
							longitude: null,
							semi_major_axis_km: null,
							eccentricity: null,
							periapsis_km: null,
							apoapsis_km: null,
							inclination_deg: null,
							period_min: null,
							lifespan_years: null,
							epoch: null,
							mean_motion: null,
							raan: null,
							arg_of_pericenter: null,
							mean_anomaly: null
						}
					}
				]
			},
			fairings: {
				reused: true,
				recovery_attempt: true,
				recovered: true,
				ship: "GOMSTREE"
			}
		},
		ships: [
			"GOMSTREE",
			"GOMSCHIEF",
			"OCISLY",
			"GOQUEST"
		],
		telemetry: {
			flight_club: null
		},
		launch_site: {
			site_id: "ccafs_slc_40",
			site_name: "CCAFS SLC 40",
			site_name_long: "Cape Canaveral Air Force Station Space Launch Complex 40"
		},
		launch_success: true,
		links: {
			mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
			mission_patch_small: "https://images2.imgbox.com/9a/96/nLppz9HW_o.png",
			reddit_campaign: "https://www.reddit.com/r/spacex/comments/i63bst/starlink_general_discussion_and_deployment_thread/",
			reddit_launch: "https://www.reddit.com/r/spacex/comments/ibacxz/rspacex_starlink10_launch_discussion_updates/",
			reddit_recovery: "https://www.reddit.com/r/spacex/comments/ic46fw/starlink10_recovery_updates_discussion_thread/",
			reddit_media: "https://www.reddit.com/r/spacex/comments/ic29wg/rspacex_starlink10_media_thread_photographer/",
			presskit: null,
			article_link: "https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/",
			wikipedia: "https://en.wikipedia.org/wiki/Starlink",
			video_link: "https://youtu.be/jTMJK7wb0rM",
			youtube_id: "jTMJK7wb0rM",
			flickr_images: [
				"https://live.staticflickr.com/65535/50241845831_9a7412e81d_o.jpg",
				"https://live.staticflickr.com/65535/50242057637_ea4f98d517_o.jpg",
				"https://live.staticflickr.com/65535/50242057682_6084977bf7_o.jpg",
				"https://live.staticflickr.com/65535/50242057677_e96fbd46e6_o.jpg"
			]
		},
		details: "This mission will launch the tenth batch of operational Starlink satellites, which are expected to be version 1.0, from LC-39A, Kennedy Space Center. It is the eleventh Starlink launch overall. The satellites will be delivered to low Earth orbit and will spend a few weeks maneuvering to their operational altitude of 550 km. This mission is includes rideshare payloads, SkySats 19-21, on top of the Starlink stack. The booster for this mission is expected to land on an ASDS.",
		upcoming: false,
		static_fire_date_utc: null,
		static_fire_date_unix: null,
		timeline: null,
		crew: null,
		last_date_update: "2020-08-15T02:21:25.000Z",
		last_ll_launch_date: null,
		last_ll_update: null,
		last_wiki_launch_date: "2020-08-18T14:31:00.000Z",
		last_wiki_revision: "042bcead-de9e-11ea-b6d9-0e010ab9f931",
		last_wiki_update: "2020-08-15T02:21:25.000Z",
		launch_date_source: "wiki"
	}
]))

describe("CommonService", () => {
	let service: CommonService;
	let httpTestingController: HttpTestingController;
	const urlObj: { [key: string]: null | string } = {
		launch_year: "2006",
		launch_success: "true",
		land_success: "true"
	}
	const router = jasmine.createSpyObj("Router", ["navigate"]);
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [CommonService,
				{
					provide: ActivatedRoute,
					useValue: {
						queryParams: of({
							launch_year: null,
							launch_success: null,
							land_success: null
						})
					}
				},
				{ provide: Router, useValue: router }
			]
		});
		service = TestBed.inject(CommonService);
		httpTestingController = TestBed.inject(HttpTestingController);
	});

	it("should be created", () => {
		expect(service).toBeTruthy();
	});

	it("should run #fetchData()", fakeAsync(() => {
		service.fetchData()
			.subscribe(pl => {
				expect(pl).toEqual(PL_MOCK)
			});

		const req = httpTestingController.expectOne("https://api.spacexdata.com/v3/launches?limit=100&launch_year=null&launch_success=null&land_success=null");
		expect(req.request.method).toEqual("GET");
		// req.flush(Object.values(PL_MOCK));
		tick();
		httpTestingController.verify();
	}));

	it("should run #buildUrl()", async () => {
		const paramString = "?limit=100";
		spyOn(service, "buildUrl").and.returnValue(`${URL}${paramString}`);
	})

	it("should run #getUrlObj()", async () => {
		spyOn(service, "getUrlTree").and.returnValue(urlObj);
	})

});
