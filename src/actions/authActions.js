import { todosRef, authRef, provider } from '../config/firebase';

export const actionTypes = {
	AUTH_SIGN_IN: 'AUTH_SIGN_IN',
	AUTH_SIGN_OUT: 'AUTH_SIGN_OUT',
	FETCH_USER: 'FETCH_USER'
};

export const signIn = () => dispatch => {
	authRef
		.signInWithPopup(provider)
		.then(result => {
			const user = result.user;
			dispatch({ type: actionTypes.AUTH_SIGN_IN, user });
		})
		.catch(error => {
			console.log(error);
		});
};

export const signOut = () => dispatch => {
	authRef
		.signOut()
		.then(() => {
			// Sign-out successful.
			dispatch({ type: actionTypes.AUTH_SIGN_OUT });
		})
		.catch(error => {
			console.log(error);
		});
};

export const fetchUser = () => dispatch => {
	authRef.onAuthStateChanged(user => {
		if (user) {
			dispatch({
				type: actionTypes.FETCH_USER,
				payload: user
			});
		} else {
			dispatch({
				type: actionTypes.FETCH_USER,
				payload: null
			});
		}
	});
};
