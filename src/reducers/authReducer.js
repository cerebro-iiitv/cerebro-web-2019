import { actionTypes } from '../actions/authActions';

const initialState = {
    signedIn: false,
    user: null
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}