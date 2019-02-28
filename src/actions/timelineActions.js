import { databaseRef } from '../config/firebase';

export const actionTypes = {
	LOAD_TIMELINE: 'LOAD_TIMELINE'
};

export const loadTimeline = () => dispatch => {
	const timelineRef = databaseRef.ref('timeline/event');
	timelineRef.on('value', snapshot => {
		dispatch({ type: actionTypes.LOAD_TIMELINE, payload: snapshot.val() });
	});
};
