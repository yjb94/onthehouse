import { observable, action } from 'mobx';

export default class HamburgerStore {
    @observable isOpen = false;

    @action open = () => {
        this.isOpen = true;
    }

    @action close = () => {
        this.isOpen = false;
    }
}