import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from "styled-components";
import { config } from '../../constants/general';

const Container = styled.div`
    display: flex;
    align-items: center;
    font-size:16px;

    font-family: 'Avenir Next', sans-serif;
`;
const TabContainer = styled.button`
    margin-left:50px;
    margin-right:50px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:${props => props.active ? `${config.color.key}` : `${config.color.tundora}`};

    transition: color .2s ease-in-out, opacity .2s ease-in-out;
`;
const Seperator = styled.div`
    color:${config.color.disabled};
`;


class TabButton extends Component {
    render() {
        const { label, active, seperator } = this.props;
        
        return (
            <Container {...this.props}>
                <TabContainer {...this.props} active={active}>
                    {label}
                </TabContainer>
                {seperator &&
                    <Seperator>
                        /
                    </Seperator>
                }
            </Container>
        );
    }
}

TabButton.propTypes = {
    label:PropTypes.string.isRequired,
    active:PropTypes.bool.isRequired,
    onClick:PropTypes.func,
    seperator:PropTypes.bool,
};
TabButton.defaultProps = {
    label:'',
    active:false,
    seperator:false
};

export default TabButton;
