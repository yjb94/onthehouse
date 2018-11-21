import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import zIndex from '../../constants/zIndex';

const Conatiner = styled.div`
    position:fixed;
    width:100%;
    height:100%;
    left:${props => props.isOpen ? "0px" : "-300px"};;
    z-index: ${zIndex.Slider};
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
    transition: .3s;
`;
const InnerContainer = styled.div`
    background-color:#fafafa;
    height:100%;
    width: 300px;
`;

@inject('slider')
@observer
class Slider extends React.Component {
    onBackdropClick = () => {
        const { slider } = this.props;
        slider.close();
    }
    onSliderClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }

    render() {
        const { slider, children } = this.props;

        return (
            <Conatiner isOpen={slider.isOpen} onClick={this.onBackdropClick}>
                <InnerContainer isOpen={slider.isOpen} onClick={this.onSliderClick}>
                    {children}
                </InnerContainer>
            </Conatiner>
        );
    }
}

Slider.defaultProps = {
};

export default Slider;