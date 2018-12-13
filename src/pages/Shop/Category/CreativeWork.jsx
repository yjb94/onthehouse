import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Card from '../../../components/DataDisplay/Card';
import Masonry from '../../../components/DataDisplay/Masonry';
import { withRouter } from "react-router-dom";
import { DETAIL } from '../../../constants/routes';
import DropLoader from '../../../components/Feedback/DropLoader';
import Banner from '../../../components/DataDisplay/Banner';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const MasonryContainer = styled.div`
    padding: 50px 100px;

    @media (max-width: 1024px) {
        padding: 30px 30px;
    }
    @media (max-width: 764px) {
        padding: 20px 20px;
    }
    @media (max-width: 480px) {
        padding: 10px 10px;
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
class CreativeWork extends React.Component {
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
                <Banner
                    title={'온더하우스 개인 맞춤 글'} 
                    subtitle={'아름답게 기억되고 싶은 결혼, 두 사람의 특별함을 더할 소중한 글과 함께하세요.'}
                    image={'https://firebasestorage.googleapis.com/v0/b/onthe-house.appspot.com/o/banner.jpg?alt=media&token=432d9cab-0c6c-41bc-ac94-40d81b01b5c9'}
                />
                <MasonryContainer>
                    <Masonry views={cardViews}/>
                </MasonryContainer>
                <LoaderContainer>
                    <DropLoader loading={isFetching}/>
                </LoaderContainer>
            </Container>
        );
    }
}

CreativeWork.defaultProps = {
};

export default withRouter(CreativeWork);