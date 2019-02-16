export const actionTypes = {
	SET_TEAM: 'SET_TEAM'
};

export const setTeam = team => dispatch => dispatch({ type: actionTypes.SET_TEAM, team });
