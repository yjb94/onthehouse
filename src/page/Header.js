import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";

const propTypes = {};

const defaultProps = {};

const Container = Styled.header`

`;

export default class Header extends React.Component {
    render() {
        return (
            <Container>
                on the house
            </Container>
        );
    }
}

 Header.propTypes = propTypes;
 Header.defaultProps = defaultProps;