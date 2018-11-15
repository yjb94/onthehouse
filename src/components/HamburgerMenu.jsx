import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Conatiner = Styled.button`
    width: 30px;
    height: 20px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;

    span:nth-child(1) {
        transform: ${props => props.isOpen ? "rotate(45deg)" : "rotate(0deg)"};
        top: ${props => props.isOpen ? "-1px" : "0px"};
        transform-origin: left center;
    }
    span:nth-child(2) {
        opacity: ${props => props.isOpen ? "0" : "1"};
        width: ${props => props.isOpen ? "0%" : "100%"};
        top: 9px;
        transform-origin: left center;
    }
    span:nth-child(3) {
        top: ${props => props.isOpen ? "20px" : "18px"};
        transform: ${props => props.isOpen ? "rotate(-45deg)" : "rotate(0deg)"} ;
        transform-origin: left center;
    }
`;
const Line = Styled.span`
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: black;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
`;

@inject('hamburger')
@observer
class HamburgerMenu extends React.Component {
    onToggle = () => {
        const { hamburger } = this.props;
        hamburger.isOpen ? hamburger.close() : hamburger.open();
    }

    render() {
        const { hamburger } = this.props;

        return (
            <Conatiner onClick={this.onToggle} isOpen={hamburger.isOpen}>
                <Line/>
                <Line/>
                <Line/>
            </Conatiner>
        );
    }
}

HamburgerMenu.defaultProps = {
};

export default HamburgerMenu;