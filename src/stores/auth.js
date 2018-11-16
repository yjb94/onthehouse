import * as firebase from "firebase";
import { firebaseApp } from '../module/firebase';
import { observable, action } from 'mobx';

class AuthStore {
    @observable user = firebaseApp.auth().currentUser;

    handleFirebaseLogin = (result) => {
        return result;
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
        return firebaseApp.auth().signOut();
    }
}
export default new AuthStore();