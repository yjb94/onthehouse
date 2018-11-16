import { observable, action } from 'mobx';

const SCROLL_OFFSET = 0;

class ScrollStore {
    @observable offset = 0;
    @observable isScrolled = this.offset > SCROLL_OFFSET;

    @action onScroll = () => {
        this.offset = window.pageYOffset;
        this.isScrolled = window.pageYOffset > SCROLL_OFFSET;
    }
}
export default new ScrollStore();