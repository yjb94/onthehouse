import React from 'react';
import Styled from "styled-components";
import faker from 'faker';
import Card from '../../components/DataDisplay/Card';
import Masonry from '../../components/DataDisplay/Masonry';

const propTypes = {};

const defaultProps = {};

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

let fakeData = [];

function generateFakeData() {
    for(let i = 0; i < 40; i++) {
        fakeData.push({
            image:`https://picsum.photos/300/400/?image=${Math.floor(Math.random()*1000)}`,
            title:faker.lorem.sentence(),
            description:faker.lorem.paragraph(),
            date:faker.date.past(),
        })
    }
}
generateFakeData();

export default class Home extends React.Component {
    render() {
        let cardViews = fakeData.map((each, idx) => {
            return <Card key={idx} {...each}/>
        })

        return (
            <Container>
                <Masonry views={cardViews}/>
            </Container>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;