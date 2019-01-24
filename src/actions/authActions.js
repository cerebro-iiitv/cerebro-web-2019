export const actionTypes = {
    SIGN_IN_DONE: 'AUTH.SIGN_IN.DONE',
    SIGN_OUT_DONE: 'AUTH.SIGN_OUT.DONE'
};

export const signedIN = user => dispatch => dispatch({type: actionTypes.SIGN_IN_DONE, user});

export const signedOut = () => dispatch => dispatch({type: actionTypes.SIGN_OUT_DONE});
