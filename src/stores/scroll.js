import { observable, action } from 'mobx';

const FIXED_OFFSET = 0;

class ScrollStore {
    @observable offset = 0;
    @observable isFixed = this.offset > FIXED_OFFSET;

    @action onScroll = () => {
        this.offset = window.pageYOffset;
        this.isFixed = window.pageYOffset > FIXED_OFFSET;
    }
}
export default new ScrollStore();