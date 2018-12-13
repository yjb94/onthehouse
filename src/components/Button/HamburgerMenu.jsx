import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import zIndex from '../../constants/zIndex';

const Conatiner = styled.button`
    width: 30px;
    height: 20px;
    position: fixed;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    z-index:${zIndex.Hamburger};
    margin: 50px;
    right: 0;

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
const Line = styled.span`
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

@inject('slider')
@observer
class HamburgerMenu extends React.Component {
    onToggle = () => {
        const { slider } = this.props;
        slider.isOpen ? slider.close() : slider.open();
    }

    render() {
        const { slider } = this.props;

        return (
            <Conatiner onClick={this.onToggle} isOpen={slider.isOpen}>
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