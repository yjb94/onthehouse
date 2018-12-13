import { observable, action } from 'mobx';

class HeaderStore {
    @observable headerTab = [];

    @action setHeaderTab = (routes) => {
        this.headerTab = routes;
    }
    @action clearHeaderTab = () => {
        this.headerTab = [];
    }
}
export default new HeaderStore();