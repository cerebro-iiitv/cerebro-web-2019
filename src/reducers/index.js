import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { eventReducer } from './eventReducer';
import { userPhoneReducer } from './userPhoneReducer';
import { teamReducer } from './teamReducer';
import { assetsReducer } from './assetsReducer';
import { timelineReducer } from './timelineReducer';

export default combineReducers({
	auth: authReducer,
	event: eventReducer,
	userPhone: userPhoneReducer,
	team: teamReducer,
	assets: assetsReducer,
	timeline: timelineReducer
});
