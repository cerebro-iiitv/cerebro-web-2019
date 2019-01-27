export const actionTypes = {
    AUTH_SIGN_IN: 'AUTH_SIGN_IN',
    AUTH_SIGN_OUT: 'AUTH_SIGN_OUT'
};

export const signedIn = user => dispatch => dispatch({type: actionTypes.AUTH_SIGN_IN, user});

export const signedOut = () => dispatch => dispatch({type: actionTypes.AUTH_SIGN_OUT});
