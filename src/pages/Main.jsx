import React from 'react';
import Styled from "styled-components";
import faker from 'faker';
import Card from '../components/DataDisplay/Card';
import Masonry from '../components/DataDisplay/Masonry';

const propTypes = {};

const defaultProps = {};

const Container = Styled.div`
    display:flex;
    overflow: hidden;
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

export default class Main extends React.Component {
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

 Main.propTypes = propTypes;
 Main.defaultProps = defaultProps;