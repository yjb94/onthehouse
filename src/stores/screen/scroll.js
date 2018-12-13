import { observable, action } from 'mobx';
import { animateScroll as scroll } from 'react-scroll'

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

    @action scrollTo = (to, options = { duration:300, smooth:true }) => {
        scroll.scrollTo(to, options);
    }
}
export default new ScrollStore();