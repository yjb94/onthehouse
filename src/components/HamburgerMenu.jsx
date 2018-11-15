import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";

const Conatiner = Styled.div`
`;
const Line = Styled.div`
    border: 1px solid black;
`;

const propTypes = {
    isOpen:PropTypes.bool.isRequired
};

const defaultProps = {};

export default class HamburgerMenu extends React.Component {
    render() {
        return (
            <Conatiner>
                <Line/>
                <Line/>
                <Line/>
            </Conatiner>
        );
    }
}

 HamburgerMenu.propTypes = propTypes;
 HamburgerMenu.defaultProps = defaultProps;