import * as firebase from "firebase";

export function getFirebaseConfig () {
    // if (process.env.NODE_ENV === 'production') {
    //     return {
    //         apiKey: "AIzaSyBXEryFS-NlROLmtpCcTeo5M9yfwDf8tNI",
    //         authDomain: "onthe-house.firebaseapp.com",
    //         databaseURL: "https://onthe-house.firebaseio.com",
    //         projectId: "onthe-house",
    //         storageBucket: "onthe-house.appspot.com",
    //         messagingSenderId: "123878270588"
    //     }
    // } else {
        return {
            apiKey: "AIzaSyBXEryFS-NlROLmtpCcTeo5M9yfwDf8tNI",
            authDomain: "onthe-house.firebaseapp.com",
            databaseURL: "https://onthe-house.firebaseio.com",
            projectId: "onthe-house",
            storageBucket: "onthe-house.appspot.com",
            messagingSenderId: "123878270588"
        }
    // }
}

export const firebaseApp = firebase.initializeApp(getFirebaseConfig());