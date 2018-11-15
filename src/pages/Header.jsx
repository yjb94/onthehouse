import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";
import HamburgerMenu from '../components/HamburgerMenu';

const propTypes = {
    burgerOpen:PropTypes.bool.isRequired
};

const defaultProps = {};

const Container = Styled.header`

`;

export default class Header extends React.Component {
    render() {
        const { burgerOpen } = this.props;

        return (
            <Container>
                <HamburgerMenu isOpen={burgerOpen}/>
                on the house
            </Container>
        );
    }
}

 Header.propTypes = propTypes;
 Header.defaultProps = defaultProps;