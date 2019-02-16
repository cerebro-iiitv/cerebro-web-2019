import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';
firebase.initializeApp(FirebaseConfig);

export const databaseRef = firebase.database();
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
