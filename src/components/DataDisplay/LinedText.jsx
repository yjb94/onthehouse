import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const propTypes = {
    label:PropTypes.string.isRequired,
    container:PropTypes.object,
    color:PropTypes.string,
    lineHeight:PropTypes.number,
    linePercentage:PropTypes.number,
};

const defaultProps = {
    label:"",
    color:"white",
    lineHeight:1,
    linePercentage:20,
};

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Line = styled.div`
    margin-top: 0.5em;
    height: ${props => props.height}px;
    background-color: ${props => props.color};
    width: ${props => props.percentage}%;
`;

export default class LinedText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { container, label, color, lineHeight, linePercentage } = this.props;

        const AdjustedContainer = container ? container : Container;
        
        return (
            <AdjustedContainer {...this.props}>
                {label}
                <Line 
                    color={color}
                    percentage={linePercentage}
                    height={lineHeight}
                />
            </AdjustedContainer>
        );
    }
}

LinedText.propTypes = propTypes;
LinedText.defaultProps = defaultProps;