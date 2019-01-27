import * as firebase from 'firebase';

import { getState } from '../store';

export const actionTypes = {
	LOAD_EVENTS: 'LOAD_EVENTS',
	EVENT_REGISTERED: 'EVENT_REGISTERED',
	EVENT_UNREGISTERED: 'EVENT_UNREGISTERED'
};

export const loadEvents = events => dispatch => dispatch({ type: actionTypes.LOAD_EVENTS, events });

export const registerToEvent = event => dispatch => {
	let user = getState().auth.user;
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
	let user = getState().auth.user;
	if (!user) {
		return;
	}
	firebase
		.database()
		.ref('/events/' + event.id + '/participants/' + user.uid)
		.remove(res => dispatch({ type: actionTypes.EVENT_UNREGISTERED, event }));
};