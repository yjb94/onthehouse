import React from 'react';
import Styled from "styled-components";

const propTypes = {};

const defaultProps = {};

const Container = Styled.footer`
    background-color: #ddd;
    padding: 100px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#999;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <Container>
                Copyright© on the house, all rights reserved
            </Container>
        );
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;