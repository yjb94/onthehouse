import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);


// creates default element for initial user
exports.onCreateUser = functions.auth.user().onCreate((user) => {
    const { uid, email, emailVerified } = user;
    const dbRef = admin.database().ref(`/users/${uid}`);
    const updates = {
        email:email,
        emailVerified:emailVerified
    }
    dbRef.update(updates)
        .then()
        .catch(error => console.error(error));
});