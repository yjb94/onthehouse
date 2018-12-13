import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const propTypes = {
    src:PropTypes.string.isRequired,
};

const defaultProps = {
    src:""
};

const Container = styled.img`
    overflow:hidden;
    opacity: ${props => props.ready ? 1 : 0};
    object-fit:cover;
    object-position: center;
    width:100%;
    height:100%;
`;

export default class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ready:false
        }
    }
    
    onLoad = () => {
        this.setState({ ready:true });
        this.props.onLoad && this.props.onLoad();
    }

    render() {
        const { ready } = this.state;
        
        return (
            <Container
                {...this.props}
                onLoad={this.onLoad}
                ready={ready}
            />
        );
    }
}

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;