const initialState = { phone: null };

export const userPhoneReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_LOAD_PHONE':
			return {
				...state,
				phone: action.phone
			};
		default:
			return state;
	}
};
