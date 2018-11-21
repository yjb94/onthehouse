import { observable, action } from 'mobx';
import { getEndpoint, getConfig } from "../constants/general";
import axios from 'axios';

class ProductStore {
    @observable products = [];
    @observable isFetching = false;
    last = undefined;
    needMore = true;

    handleError = (err) => {
        this.isFetching = false;
        console.error(err);
    }

    @action load = (limit = 5) => {
        if(!this.needMore || this.isFetching) return;
        this.isFetching = true;

        const params = { 
            limit:limit,
            last:this.last
        };
        return axios.get(getEndpoint(`product`), { params:params }).then((res) => {
            this.isFetching = false;

            const { data } = res;
            this.products = [...this.products, ...data.products];
            this.last = data.last;
            this.needMore = data.total > this.products.length;
            return data.product;
        }).catch(this.handleError);
    }
    
    @action create = (attr) => {
        axios.post(getEndpoint(`product`), JSON.stringify({ attr:attr }), getConfig()).then((res) => {
            this.isFetching = false;

            const { data } = res;
            this.products = [ ...this.products, data.product ]
            return data.product;
        }).catch(this.handleError);
    }
}
export default new ProductStore();