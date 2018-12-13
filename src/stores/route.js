import { observable, action } from 'mobx';

class ProductStore {
    @observable curRoute = window.location;

    @action onRouteChange = (location, action) => {
        this.curRoute = location;
    }
}
export default new ProductStore();