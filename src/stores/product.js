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
        // this.isFetching = true;

        const params = { 
            limit:limit,
            last:this.last
        };
        this.products = [
        {
            description: "결혼식이 산으로 갑니다.",
            id: "-LRpAsw7OhoyPcDBhiOB",
            image: "https://firebasestorage.googleapis.com/v0/b/onthe-house.appspot.com/o/images%2Fimage-le638vwhae.jpg?alt=media&token=fe132d04-df97-483a-bbca-861799166b23",
            price: "99",
            title: "청첩장 문구"
        },
        {
            description: "사랑아 아들을 자랑스러워하거라",
            id: "-LRpBBMEA4YB1O6i-X3Z",
            image: "https://firebasestorage.googleapis.com/v0/b/onthe-house.appspot.com/o/images%2Fimage-15098hjtgpi.jpg?alt=media&token=b9a1c3e2-b11a-4081-afa1-ef74817792aa",
            price: "99",
            title: "혼인서약서"
        }]
        // return axios.get(getEndpoint(`product`), { params:params }).then((res) => {
        //     this.isFetching = false;

        //     const { data } = res;
        //     this.products = [...this.products, ...data.products];
        //     console.log(data.products);
        //     this.last = data.last;
        //     this.needMore = data.total > this.products.length;
        //     return data.product;
        // }).catch(this.handleError);
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