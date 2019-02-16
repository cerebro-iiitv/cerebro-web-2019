import { actionTypes } from '../actions/eventActions';

const initialState = { events: [], loadingEvents: true };

export const eventReducer = (state = initialState, action) => {
	console.log(action);
	switch (action.type) {
		case actionTypes.LOAD_EVENTS:
			return { ...state, events: action.payload, loadingEvents: false };
		default:
			return state;
	}
};
