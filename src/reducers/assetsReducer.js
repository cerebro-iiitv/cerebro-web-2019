import { actionTypes } from '../actions/assetsActions';

const initialState = { assets: null };

export const assetsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOAD_ASSET:
			return {
				...state,
				assets: action.payload
			};
		default:
			return state;
	}
};
