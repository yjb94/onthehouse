import * as firebase from "firebase";
import { firebaseApp } from '../module/firebase';
import { observable, action } from 'mobx';
import { getEndpoint, getConfig } from "../constants/general";
import axios from 'axios';
import { getIdToken } from "../utils/utils";

class AuthStore {
    @observable user = JSON.parse(localStorage.getItem('me'));
    @observable isFetching = false;

    handleFirebaseLogin = (result) => {
        this.isFetching = false;
        return result
    }

    handleError = (error) => {
        this.isFetching = false;
        alert(error.message || error);
        return error;
    }

    @action register = (email, password) => {
        this.isFetching = true;
        return firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.handleFirebaseLogin)
            .catch(this.handleError);
    }
    @action login = (email, password) => {
        this.isFetching = true;
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.handleFirebaseLogin)
            .catch(this.handleError);
    }
    @action logout = () => {
        this.user = null;
        localStorage.removeItem('me');
        localStorage.removeItem('idToken');
        return firebaseApp.auth().signOut()
            .catch(this.handleError);
    }

    @action getUser = (uid) => {
        if(!uid) {
            const currentUser = firebase.auth().currentUser;
            uid = currentUser.uid || '';
        }

        this.isFetching = true;
        const loadUserData = () => {
            axios.get(getEndpoint(`user/${uid}`)).then((res) => {
                this.isFetching = false;
                res.data.id = uid;
                this.user = res.data;
                localStorage.setItem('me', JSON.stringify(res.data));
                return this.user;
            }).catch(this.handleError);
        }
        getIdToken().then(loadUserData);
    }

    @action setUser = (uid, attr) => {
        if(!uid) {
            const currentUser = firebase.auth().currentUser;
            uid = currentUser.uid || '';
        }

        this.isFetching = true;
        axios.post(getEndpoint(`user/${uid}`), JSON.stringify({ attr:attr }), getConfig())
        .then((result) => {
            this.isFetching = false;
            return result;
        }).catch(this.handleError);
    }
}
export default new AuthStore();