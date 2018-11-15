import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";
import { decorate, observable, action } from 'mobx';
import { observer } from 'mobx-react';

const Conatiner = Styled.div`
`;
const Line = Styled.div`
    border: 1px solid black;
`;

const propTypes = {
    isOpen:PropTypes.bool.isRequired
};

const defaultProps = {};

class HamburgerMenu extends React.Component {
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

decorate(HamburgerMenu, {
    isOpen: observable,
    open: action,
    close: action
})

export default observer(HamburgerMenu);