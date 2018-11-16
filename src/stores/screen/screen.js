import { observable, action } from 'mobx';
import { getHeaderHeight } from '../../utils/utils';

const screenWidth = [1024, 764, 480];
const pc = 1;
const tablet = 1;

class ScreenStore {
    @observable width = window.innerWidth;
    @observable headerHeight = getHeaderHeight();
    @observable isTaletSize = this.width < screenWidth[pc];
    @observable isMobileSize = this.width < screenWidth[tablet];

    @action resize = () => {
        this.width = window.innerWidth;
        this.isTaletSize = window.innerWidth < screenWidth[pc];
        this.isMobileSize = window.innerWidth < screenWidth[tablet]
    }
    @action setHeaderHeight = (height) => {
        this.headerHeight = height || getHeaderHeight();
    }
}
export default new ScreenStore();