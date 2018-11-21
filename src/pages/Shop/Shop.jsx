import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Card from '../../components/DataDisplay/Card';
import Masonry from '../../components/DataDisplay/Masonry';
import { withRouter } from "react-router-dom";
import { DETAIL } from '../../constants/routes';

const Container = Styled.div`
    display:flex;
    overflow: hidden;
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

@inject(store => ({
    products:store.product.products,
    loadProducts:store.product.load,
    shouldLoad:store.scroll.shouldLoad
}))
@observer
class Shop extends React.Component {
    componentWillReceiveProps(nextProps) {
        const { shouldLoad } = this.props;
        if(nextProps.shouldLoad && !shouldLoad) {
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
        const { products } = this.props;

        let cardViews = products.map((each, idx) => {
            return <Card key={idx} onClick={this.onClickItem.bind(this, each)} {...each}/>
        })

        return (
            <Container>
                <Masonry views={cardViews}/>
            </Container>
        );
    }
}

Shop.defaultProps = {
};

export default withRouter(Shop);