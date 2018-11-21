import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Card from '../../components/DataDisplay/Card';
import Masonry from '../../components/DataDisplay/Masonry';
import { withRouter } from "react-router-dom";
import { DETAIL } from '../../constants/routes';
import DropLoader from '../../components/Feedback/DropLoader';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;

    @media (max-width: 1024px) {
        padding: 0px 30px;
    }
    @media (max-width: 764px) {
        padding: 0px 20px;
    }
    @media (max-width: 480px) {
        padding: 0px 10px;
    }
`;
const LoaderContainer = styled.div`
    margin-top:60px;
`;

@inject(store => ({
    products:store.product.products,
    loadProducts:store.product.load,
    isFetching:store.product.isFetching,

    shouldLoad:store.scroll.shouldLoad
}))
@observer
class Shop extends React.Component {
    componentDidMount = () => {
        this.load();
    }
    
    componentWillReceiveProps(nextProps) {
        const { shouldLoad, isFetching } = this.props;
        if(nextProps.shouldLoad && !shouldLoad && !isFetching) {
            this.load();
        }
    }

    onClickItem = (data) => {
        const { history } = this.props;
        history.push(`${DETAIL.route}?id=${data.id}`)
    }

    load = () => {
        const { loadProducts } = this.props;
        loadProducts();
    }

    render() {
        const { products, isFetching } = this.props;

        let cardViews = products.map((each, idx) => {
            return <Card key={idx} onClick={this.onClickItem.bind(this, each)} {...each}/>
        })

        return (
            <Container>
                <Masonry views={cardViews}/>
                <LoaderContainer>
                    <DropLoader loading={isFetching}/>
                </LoaderContainer>
            </Container>
        );
    }
}

Shop.defaultProps = {
};

export default withRouter(Shop);