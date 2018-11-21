import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from "styled-components";
import DropLoader from '../Feedback/DropLoader';

export const ButtonState = {
    idle:'idle',
    loading:'loading',
    success:'success',
    fail:'fail'
};

const Container = styled.button`
    box-shadow: 0 1px 4px 0px #C0C0C0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 40px;
`;


class StateButton extends Component {
    render() {
        const { buttonState, onClick, children } = this.props;
        
        return (
            <Container onClick={onClick} >
                {buttonState === ButtonState.loading && <DropLoader loading={true}/>}
                {buttonState === ButtonState.idle && 
                    children
                }
            </Container>
        );
    }
}

StateButton.propTypes = {
    buttonState:PropTypes.string,
    onClick:PropTypes.func,
};
StateButton.defaultProps = {
    buttonState:ButtonState.idle
};

export default StateButton;
