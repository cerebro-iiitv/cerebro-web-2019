import { databaseRef } from '../config/firebase';

export const actionTypes = {
	SET_TEAM: 'SET_TEAM'
};

export const setTeam = () => dispatch => {
	const teamRef = databaseRef.ref('team');
	teamRef.on('value', snapshot => {
		dispatch({ type: actionTypes.SET_TEAM, payload: snapshot.val() });
	});
};
