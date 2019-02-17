import * as firebase from 'firebase';

import { getState } from '../store';

export const actionTypes = {
	USER_SAVE_PHONE: 'USER_SAVE_PHONE',
	USER_LOAD_PHONE: 'USER_LOAD_PHONE'
};

export const saveUserPhone = number => dispatch => {
	if (getState().auth.uid) {
		firebase
			.database()
			.ref('/users/' + getState().auth.uid + '/phone')
			.set(number, result => dispatch({ type: actionTypes.USER_SAVE_PHONE }));
	} else {
		dispatch({ type: actionTypes.USER_SAVE_PHONE });
	}
};

export const loadUserPhone = () => dispatch => {
	firebase
		.database()
		.ref('/users/' + getState().auth.uid + '/phone')
		.on('value', snapshot => {
			dispatch({ type: actionTypes.USER_LOAD_PHONE, phone: snapshot.val() });
		});
};
