import { observable, action } from 'mobx';

const SCROLL_OFFSET = 0;
const THRESHOLD = 0.2;

class ScrollStore {
    @observable offset = 0;
    @observable isScrolled = this.offset > SCROLL_OFFSET;
    @observable shouldLoad = false;

    @action onScroll = () => {
        this.offset = window.pageYOffset;
        this.isScrolled = window.pageYOffset > SCROLL_OFFSET;

        let screenHeight = window.innerHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollRatio = 1 - (this.offset + screenHeight) / scrollHeight;
        this.shouldLoad = scrollRatio < THRESHOLD;
    }
}
export default new ScrollStore();