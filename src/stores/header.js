import { observable, action } from 'mobx';
import { DEFAULT_SELECTED_CATEGORY } from '../constants/constants';

class HeaderStore {
    @observable tab = [];
    @observable tabIdx = DEFAULT_SELECTED_CATEGORY;

    @action setTab = (routes) => {
        this.tab = routes;
    }
    @action clearTab = () => {
        this.tab = [];
    }

    @action setTabIdx = (idx) => {
        this.tabIdx = idx;
    }
}
export default new HeaderStore();