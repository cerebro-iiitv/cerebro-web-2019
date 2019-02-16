import { actionTypes } from '../actions/authActions';

const initialState = {
	signedIn: false,
	user: null
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_USER':
			return action.payload || null;
		default:
			return state;
	}
};
