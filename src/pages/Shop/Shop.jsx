import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import faker from 'faker';
import Card from '../../components/DataDisplay/Card';
import Masonry from '../../components/DataDisplay/Masonry';
import { withRouter } from "react-router-dom";
import { DETAIL } from '../../constants/routes';

const Container = Styled.header`
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

let fakeData = [];

function generateFakeData() {
    for(let i = 0; i < 40; i++) {
        fakeData.push({
            image:'',//`https://picsum.photos/300/400/?image=${Math.floor(Math.random()*1000)}`,
            title:faker.lorem.sentence(),
            description:faker.lorem.paragraph(),
            date:faker.date.past(),
            id:faker.random.uuid(),
            price:faker.random.number(1000)
        })
    }
}
generateFakeData();

@inject(store => ({
}))
@observer
class Shop extends React.Component {
    onClickItem = (data) => {
        const { history } = this.props;
        history.push(`${DETAIL.route}?id=${data.id}`)
    }

    render() {
        let cardViews = fakeData.map((each, idx) => {
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