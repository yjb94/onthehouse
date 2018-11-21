import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Input from '../../components/DataEntry/Input';
import { InputID } from '../../constants/ID';
import { FormattedMessage } from 'react-intl';
import ImageInput from '../../components/DataEntry/ImageInput';
import { uploadImage } from '../../utils/utils';

const Container = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;
const InnerContainer = styled.div`
    display:flex;
    flex-direction:column;
`;
const ImagePreview = styled.img`
`;

const CreateButton = styled.button`
    margin-top:20px;
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
            image:{ preview:'', file:undefined }
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        let state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
    }
    onImageReady = (preview, file) => {
        this.setState({ image:{ preview, file } })
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { createProduct } =  this.props;
        const { image } =  this.state;
        const { title, description, price } = this.state;

        if(this.validate()) {
            if(image.file) {
                uploadImage(image.file).then((image) => {
                    createProduct({ title, description, price, image });
                });
            } else {
                createProduct({ title, description, price });
            }
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
        const { title, description, price, image } =  this.state;

        return (
            <Container onSubmit={this.onSubmit}>
                <InnerContainer>
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
                    <ImageInput
                        onImageReady={this.onImageReady}
                    />
                    <ImagePreview src={image.preview}/>
                </InnerContainer>
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