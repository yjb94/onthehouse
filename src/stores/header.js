import { observable, action } from 'mobx';
import { DEFAULT_SELECTED_CATEGORY } from '../constants/constants';
import { getHeaderHeight } from '../utils/utils';

class HeaderStore {
    @observable tab = [];
    @observable tabIdx = DEFAULT_SELECTED_CATEGORY;

    @observable headerHeight = getHeaderHeight();

    @action setTab = (routes) => {
        this.tab = routes;
    }
    @action clearTab = () => {
        this.tab = [];
    }

    @action setTabIdx = (idx) => {
        this.tabIdx = idx;
    }

    @action setHeaderHeight = (height) => {
        this.headerHeight = height || getHeaderHeight();
    }
}
export default new HeaderStore();