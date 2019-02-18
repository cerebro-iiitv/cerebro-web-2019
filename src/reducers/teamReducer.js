import { actionTypes } from '../actions/teamActions';

const initialState = { team: [], loadingTeams: true };

export const teamReducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_TEAM:
			return {
				...state,
				team: action.payload,
				loadingTeams: false
			};
		default:
			return state;
	}
};
