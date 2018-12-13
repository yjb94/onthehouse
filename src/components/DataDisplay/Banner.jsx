import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import LinedText from './LinedText';

const propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
};

const defaultProps = {
    title: '',
    subtitle: '',
    image: ''
};

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${props => props.image});
    box-sizing: border-box;
    color:white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 40px 30px;
    height:380px;
    font-size:20px;
    
    @media (max-width: 1024px) {
        height: 280px;
        font-size:18px;
    }
    @media (max-width: 764px) {
        height: 250px;
        font-size:16px;
    }
    @media (max-width: 480px) {
        height: 200px;
        font-size:14px;
        padding:30px 20px;
    }
`;

const Overlay = styled.div`
    position:absolute;
    background-color:rgba(0,0,0,0.3);
    left:0;
    right:0;
    top:0;
    bottom:0;
`;

const Title = styled.div`
    font-size: 1.6em;
    font-weight: 500;
    margin-bottom: 8px;
    position: relative;
`;

const Subtitle = styled.div`
    font-size: 1em;
    font-weight: 200;
    position: relative;
`;

export default class Banner extends React.Component {
    render() {
        const { title, subtitle } = this.props;

        return (
            <Container {...this.props}>
                <Overlay/>
                <LinedText 
                    container={Title}
                    label={title}
                    linePercentage={40}
                />
                <Subtitle>
                    {subtitle}
                </Subtitle>
            </Container>
        );
    }
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;