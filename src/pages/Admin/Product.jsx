import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Input from '../../components/DataEntry/Input';
import { InputID } from '../../constants/ID';
import { FormattedMessage } from 'react-intl';

const Container = Styled.form`
    display:flex;
`;

const CreateButton = Styled.button`
`;

@inject(store => ({
    createProduct:store.product.create
}))
@observer
class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title:'',
            description:'',
            price:0,
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        let state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { createProduct } =  this.props;

        if(this.validate()) {
            createProduct(this.state);
        } else {
            //TODO: err control
        }
    }
    validate = () => {
        //TODO: validation logic
        const { title, description, price } =  this.state;
        if(title && description && price)
            return true;
    }

    render() {
        const { title, description, price } =  this.state;

        return (
            <Container onSubmit={this.onSubmit}>
                <Input
                    id={InputID.title} 
                    value={title} 
                    onChange={this.onInputChange}
                />
                <Input 
                    id={InputID.description} 
                    value={description} 
                    onChange={this.onInputChange}
                />
                <Input 
                    id={InputID.price} 
                    value={price.toString()} 
                    onChange={this.onInputChange}
                />
                <CreateButton>
                    <FormattedMessage id={'Create'}/>
                </CreateButton>
            </Container>
        );
    }
}

Product.defaultProps = {
};

export default Product;