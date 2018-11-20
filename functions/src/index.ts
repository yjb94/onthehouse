import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import * as utils from './utils';

import * as express from 'express';
import * as bodyParser from "body-parser";

admin.initializeApp(functions.config().firebase);
const cors = require('cors')({ origin:true });

const db = admin.database();

const app = express();
const main = express();

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

app.get('/user/:uid', (req, res) => {
    cors(req, res, () => {
        const uid = req.params.uid.toString();
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
})