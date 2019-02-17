import * as firebase from 'firebase';
import { databaseRef } from '../config/firebase';
import { getState } from '../store';

export const actionTypes = {
	LOAD_EVENTS: 'LOAD_EVENTS',
	EVENT_REGISTERED: 'EVENT_REGISTERED',
	EVENT_UNREGISTERED: 'EVENT_UNREGISTERED'
};

export const loadEvents = events => dispatch => {
	const eventRef = databaseRef.ref('events');
	eventRef.on('value', snapshot => {
		dispatch({ type: actionTypes.LOAD_EVENTS, payload: snapshot.val() });
	});
};

export const registerForEvent = event => dispatch => {
	let user = getState().auth;
	// console.log(user);
	if (!user) {
		return;
	}
	firebase
		.database()
		.ref('/events/' + event.id + '/participants/' + user.uid)
		.set(
			{
				name: user.displayName,
				uid: user.uid
			},
			res => dispatch({ type: actionTypes.EVENT_REGISTERED, event })
		);
};

export const unregisterFromEvent = event => dispatch => {
	let user = getState().auth.uid;
	// console.log(event);
	// console.log(user);
	if (!user) {
		return;
	}
	firebase
		.database()
		.ref('/events/' + event.id + '/participants/' + user)
		.remove(res => dispatch({ type: actionTypes.EVENT_UNREGISTERED, event }));
};
