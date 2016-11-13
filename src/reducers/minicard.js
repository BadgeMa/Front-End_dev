import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';


const initialState = {
	totalReport: -1,
	todayReport: -1,
	totalCouncel: -1,
	todayCouncel: -1,
	requests: {
		fetching: false,
		fetched: false,
		response: null,
		error: null
	}
}

/* MINI CARD */
export default function minicard(state = initialState, action) {

    switch (action.type) {

		/* TOTAL_REPORT */
		case types.GET_TOTAL_REPORT.REQUEST:
			// FETCHING JUST HAS BEGUN
			return update(state, {
				requests: {
					fetching: { $set: true },
					fetched: { $set: false },
					response: { $set: null },
					error: { $set: null }
				}
			});
		case types.GET_TOTAL_REPORT.SUCCESS:
			console.log("Fetch total report success");
			return update(state, {
				totalReport: { $set: action.payload.response.data.report_result[0].num}
			});
		case types.GET_TOTAL_REPORT.FAILURE:

			return update(state, {
				requests: {
					fetching: false,
					error: { $set: action.payload.error }
				}
			});
		/* COMPLETE REPORT */
		case types.GET_TOTAL_REPORT.REQUEST:
			// FETCHING JUST HAS BEGUN
			return update(state, {
				requests: {
					fetching: { $set: true },
					fetched: { $set: false },
					response: { $set: null },
					error: { $set: null }
				}
			});
		case types.GET_TOTAL_REPORT.SUCCESS:
			console.log("Fetch total report success");
			return update(state, {
				totalReport: { $set: action.payload.response.data.report_result[0].num}
			});
		case types.GET_TOTAL_REPORT.FAILURE:

				return update(state, {
					requests: {
						fetching: false,
						error: { $set: action.payload.error }
					}
				});
			case types.GET_TOTAL_REPORT.REQUEST:
				// FETCHING JUST HAS BEGUN
				return update(state, {
					requests: {
						fetching: { $set: true },
						fetched: { $set: false },
						response: { $set: null },
						error: { $set: null }
					}
				});
				case types.GET_TOTAL_REPORT.SUCCESS:
					console.log("Fetch total report success");
					return update(state, {
						totalReport: { $set: action.payload.response.data.report_result[0].num}
					});
				case types.GET_TOTAL_REPORT.FAILURE:

					return update(state, {
						requests: {
							fetching: false,
							error: { $set: action.payload.error }
						}
					});
				case types.GET_TOTAL_REPORT.REQUEST:
					// FETCHING JUST HAS BEGUN
					return update(state, {
						requests: {
							fetching: { $set: true },
							fetched: { $set: false },
							response: { $set: null },
							error: { $set: null }
						}
					});
					case types.GET_TOTAL_REPORT.SUCCESS:
						console.log("Fetch total report success");
						return update(state, {
							totalReport: { $set: action.payload.response.data.report_result[0].num}
						});
					case types.GET_TOTAL_REPORT.FAILURE:

						return update(state, {
							requests: {
								fetching: false,
								error: { $set: action.payload.error }
							}
						});

        default:
            return state;
    }
}
