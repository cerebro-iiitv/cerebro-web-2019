import { databaseRef } from '../config/firebase';

export const actionTypes = {
	LOAD_ASSET: 'LOAD_ASSET'
};

export const loadAssets = () => dispatch => {
	const assetsRef = databaseRef.ref('/assets')
	assetsRef.on('value', snapshot => {
		dispatch({ type: actionTypes.LOAD_ASSET, payload: snapshot.val() });
	});
};
