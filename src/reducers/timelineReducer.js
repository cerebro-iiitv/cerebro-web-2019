import { actionTypes } from '../actions/timelineActions';

const initialState = { timeline: [], loadingTimeline: true };

export const timelineReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_TIMELINE:
			return {
				...state,
				timeline: action.payload,
				loadingTimeline: false
			};
		default:
			return state;
	}
};
