import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { config } from '../../constants/general';

const Container = styled.div`
    display: inline-block;
    position: relative;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
`;
  
const ItemContainer = styled.div`
    position: absolute;
    border: 1px solid ${props => props.color};
    opacity: 0;
    border-radius: 50%;
    animation: drop 1.2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    animation-delay: ${props => `${props.index*0.6}s`};
    
    @keyframes drop {
        0% {
            top: ${props => `${props.size * 0.4375}${props.sizeUnit}`};
            left: ${props => `${props.size * 0.4375}${props.sizeUnit}`};
            width: 0;
            height: 0;
            opacity: 1;
        }
        100% {
            top: ${props => `-${props.size * 0.015625}${props.sizeUnit}`};
            left: ${props => `-${props.size * 0.015625}${props.sizeUnit}`};
            width: ${props => `${props.size * 0.90625}${props.sizeUnit}`};
            height: ${props => `${props.size * 0.90625}${props.sizeUnit}`};
            opacity: 0;
        }
    }
`;

const LoadItem = ({ attr }) => {
    return (
        <ItemContainer {...attr}/>
    )
}

class DropLoader extends React.Component {
    render() {
        const { loading, color, size, sizeUnit } = this.props;

        const loaders = [0, 1].map(index => {
            return <LoadItem key={index} attr={{ color, size, sizeUnit, index }}/>
        })

        return loading ?
            <Container size={size} sizeUnit={sizeUnit}>
                {loaders}
            </Container> : null;
    }
}

DropLoader.propTypes = {
    loading: PropTypes.bool.isRequired,
    color: PropTypes.string,
    size: PropTypes.number,
    sizeUnit: PropTypes.string,
};

DropLoader.defaultProps = {
    loading: false,
    color: config.color.key,
    size: 28,
    sizeUnit: 'px',
};

export default DropLoader;