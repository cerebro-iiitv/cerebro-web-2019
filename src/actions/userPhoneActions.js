import * as firebase from 'firebase';

import { getState } from '../store';

export const actionTypes = {
	USER_SAVE_PHONE: 'USER_SAVE_PHONE',
	USER_LOAD_PHONE: 'USER_LOAD_PHONE'
};

export const saveUserPhone = number => dispatch => {
	if (getState().auth.user) {
		firebase
			.database()
			.ref('/users/' + getState().auth.user.uid + '/phone')
			.set(number, result => dispatch({ type: actionTypes.USER_SAVE_PHONE }));
	} else {
		dispatch({ type: actionTypes.USER_SAVE_PHONE });
	}
};

export const loadUserPhone = () => dispatch => {
	firebase
		.database()
		.ref('/users/' + getState().auth.user.uid + '/phone')
		.on('value', snapshot => {
			console.log(getState().auth.user, 'asdasdadasdasda');
			dispatch({ type: actionTypes.USER_LOAD_PHONE, phone: snapshot.val() });
		});
};
