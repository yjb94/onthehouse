import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as utils from './utils';

import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const cors = require('cors');

const db = admin.database();

const app = express();
const main = express();

app.use(cors({ origin: true }));
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
export const webApi = functions.https.onRequest(main);

// creates default element for initial user
exports.onCreateUser = functions.auth.user().onCreate((user) => {
    const { uid, email, emailVerified } = user;
    const dbRef = db.ref(`/users/${uid}`);
    const updates = {
        email:email,
        emailVerified:emailVerified,
        created_at: utils.getTime()
    }
    dbRef.update(updates)
        .then()
        .catch(error => console.error(error));
});

const sendError = (res, error:String): void => {
    console.error(error);
    res.sendStatus(404);
}
const verify = (req, res) => {
    const idToken = req.get('Authorization');
    return admin.auth().verifyIdToken(idToken).catch((error) => sendError(res, error));
}

app.get('/user/:uid', (req, res) => {
    const uid = req.params.uid.toString();
    console.log(`GET /user/${uid}`);
    if(!uid) {
        sendError(res, 'No Uid found');
    }
    
    return db.ref(`users/${uid}`).once('value').then(snap => {
        const user = snap.val();
        if (user) {
            delete user['created_at'];
            res.send(user);
        } else {
            sendError(res, 'User not found');
        }
    }).catch((error) => {
        sendError(res, error.toString());
    });
})

app.post('/user/:uid', (req, res) => {
    verify(req, res).then(() => {
        const uid = req.params.uid.toString();
        const attr = req.body.attr;
        console.log(`PUT /user/${uid}`);
        if(!uid) {
            sendError(res, 'No Uid found');
        }
        if(!attr || Object.keys(attr).length === 0) {
            sendError(res, 'No attributes to update');
        }
    
        const dbRef = db.ref(`/users/${uid}`);
        console.log(`/users/${uid} update - ${JSON.stringify(attr)}`);
        dbRef.update(attr)
            .then(result => res.send(result))
            .catch(error => sendError(res, error));
    });
})