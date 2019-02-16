import { actionTypes } from '../actions/userPhoneActions';

const initialState = { phone: null };

export const userPhoneReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.USER_LOAD_PHONE:
			return {
				...state,
				phone: action.payload
			};
		default:
			return state;
	}
};
