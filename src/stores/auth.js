import * as firebase from "firebase";
import { firebaseApp } from '../module/firebase';
import { observable, action } from 'mobx';
import { getEndpoint } from "../constants/general";
import axios from 'axios';

class AuthStore {
    @observable user = JSON.parse(localStorage.getItem('me'));

    handleFirebaseLogin = (result) => {
        return result
    }

    handleFirebaseError = (error) => {
        alert(error.message);
        return error;
    }

    @action register = (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.handleFirebaseLogin)
            .catch(this.handleFirebaseError);
    }
    @action login = (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.handleFirebaseLogin)
            .catch(this.handleFirebaseError);
    }
    @action logout = () => {
        this.user = null;
        return firebaseApp.auth().signOut()
            .catch(this.handleFirebaseError);
    }
    @action getUser = (uid) => {
        if(!uid) {
            const currentUser = firebase.auth().currentUser;
            uid = currentUser.uid || '';
        }
        axios.get(getEndpoint(`user/${uid}`)).then((res) => {
            this.user = res.data;
            localStorage.setItem('me', JSON.stringify(res.data));
            return this.user;
        }).catch(_ => null);
    }
    @action logout = () => {
        this.user = null;
        return firebaseApp.auth().signOut();
    }
}
export default new AuthStore();