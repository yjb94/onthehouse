import React from 'react';
import Styled from "styled-components";

const propTypes = {};

const defaultProps = {};

const Container = Styled.div`
    display:flex;
`;

export default class Home extends React.Component {
    render() {
        return (
            <Container>
                나는 박은송. 반갑다.
            </Container>
        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;