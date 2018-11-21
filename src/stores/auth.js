import * as firebase from "firebase";
import { firebaseApp } from '../module/firebase';
import { observable, action } from 'mobx';
import { getEndpoint, getConfig } from "../constants/general";
import axios from 'axios';
import { getIdToken } from "../utils/utils";

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
        localStorage.removeItem('me');
        localStorage.removeItem('idToken');
        return firebaseApp.auth().signOut()
            .catch(this.handleFirebaseError);
    }

    @action getUser = (uid) => {
        if(!uid) {
            const currentUser = firebase.auth().currentUser;
            uid = currentUser.uid || '';
        }

        const loadUserData = () => {
            axios.get(getEndpoint(`user/${uid}`)).then((res) => {
                res.data.id = uid;
                this.user = res.data;
                localStorage.setItem('me', JSON.stringify(res.data));
                return this.user;
            }).catch(_ => null);
        }
        getIdToken().then(loadUserData);
    }

    @action setUser = (uid, attr) => {
        if(!uid) {
            const currentUser = firebase.auth().currentUser;
            uid = currentUser.uid || '';
        }
        axios.post(getEndpoint(`user/${uid}`), JSON.stringify({ attr:attr }), getConfig()).then((res) => {
            return null;
        }).catch(_ => null);
    }
}
export default new AuthStore();