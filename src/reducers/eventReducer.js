import { actionTypes } from '../actions/eventActions';

const initialState = { events: [], loadingEvents: true };

export const eventReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};