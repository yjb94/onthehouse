import { observable, action } from 'mobx';
import { getEndpoint, getConfig } from "../constants/general";
import axios from 'axios';

class ProductStore {
    @observable products = [];
    last = undefined;
    needMore = true;

    @action load = (limit = 5) => {
        if(!this.needMore) return;

        const params = { 
            limit:limit,
            last:this.last
        };
        return axios.get(getEndpoint(`product`), { params:params }).then((res) => {
            const { data } = res;
            this.products = [...this.products, ...data.products];
            this.last = data.last;
            this.needMore = data.total > this.products.length;
            return data.product;
        }).catch(_ => null);
    }
    
    @action create = (attr) => {
        axios.post(getEndpoint(`product`), JSON.stringify({ attr:attr }), getConfig()).then((res) => {
            const { data } = res;
            this.products = [ ...this.products, data.product ]
            return data.product;
        }).catch(_ => null);
    }
}
export default new ProductStore();