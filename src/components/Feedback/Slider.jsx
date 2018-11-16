import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import zIndex from '../../constants/zIndex';

const Conatiner = Styled.div`
    position:fixed;
    width:100%;
    height:100%;
    z-index: ${zIndex.Slider};
    pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
`;
const InnerContainer = Styled.div`
    background-color:#fafafa;
    left:0;
    height:100%;
    width: ${props => props.isOpen ? "300px" : "0px"};
    transition: .3s;
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