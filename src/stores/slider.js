import { observable, action } from 'mobx';

class SliderStore {
    @observable isOpen = false;

    @action open = () => {
        this.isOpen = true;
    }

    @action close = () => {
        this.isOpen = false;
    }
}
export default new SliderStore();