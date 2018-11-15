import { observable, action } from 'mobx';

class HamburgerStore {
    @observable isOpen = false;

    @action open = () => {
        this.isOpen = true;
    }

    @action close = () => {
        this.isOpen = false;
    }
}
export default new HamburgerStore();