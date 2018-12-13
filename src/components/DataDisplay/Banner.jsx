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
    height:280px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image:url(${props => props.image});
    box-sizing: border-box;
    color:white;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    padding: 40px 30px;
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
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 8px;
    position: relative;
`;

const Subtitle = styled.div`
    font-size: 20px;
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