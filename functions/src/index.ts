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


//user


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
        console.log(`POST /user/${uid}`);
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


//product

app.post('/product', (req, res) => {
    verify(req, res).then(() => {
        console.log(`POST /product/`);

        const pid = admin.database().ref('/products/').push().key;
        const dbRef = db.ref(`/products/${pid}`);
        const attr = req.body.attr;

        console.log(`/product/ create - ${JSON.stringify(attr)}`);
        dbRef.update(attr)
            .then(_ => res.send({ success: true, product: attr }))
            .catch(error => sendError(res, error));
    });
})

app.get('/product', (req, res) => {
    console.log(`GET /product`);

    const retrieve = (limit, last) => {
        const ref = db.ref(`products/`);

        return ref.once('value').then(snapshot => {
            const objectData = snapshot.val() || {};
            let indexOfLast = -1;
            const products = Object.keys(objectData).map((key, idx) => {
                objectData[key].id = key;
                if(key === last) indexOfLast = idx;
                return objectData[key];
            })
            // limit - 5 / last - undefined
            // [a,b,c,d,e,f,g]
            // [a,b,c,d,e,f] / firstIdx = 0 / lastIdx = 5
            // [a,b,c,d,e] / f - last / total - 7

            // limit - 5 / last - f
            // [a,b,c,d,e,f,g]
            // [f,g] / firstIdx = 5 / lastIdx = 6
            // [f,g] / undefined - last / total - 7
            console.log('indexOfLast', indexOfLast, 'last', last);

            const firstIdx = last ? indexOfLast : 0;
            const lastIdx = firstIdx + limit + 1;
            console.log('lastIdx', lastIdx, 'firstIdx', firstIdx);

            const sliced = products.slice(Math.max(firstIdx, 0), Math.min(lastIdx, products.length));
            console.log('sliced', sliced);
            let cursor = undefined;
            if (sliced.length > limit) 
                cursor = sliced.pop().id;
            console.log('cursor', cursor);
            return { products: sliced, total: Object.keys(objectData).length, last: cursor };
        });
    };

    retrieve(req.query.limit * 1 || 3, req.query.last)
    .then(result => res.send(result))
    .catch(error => sendError(res, error));
});