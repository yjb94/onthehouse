import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const propTypes = {
    title:PropTypes.string.isRequired,
    subtitle:PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
};

const defaultProps = {
    title: '',
    subtitle: '',
    image: '',
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    height:300px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const InnerContainer = styled.div`
    background-color:rgba(0,0,0,0.3);
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color:white;
    font-size: 16px;

    padding: 0px 20px;
`;

const Title = styled.div`
    font-size: 1.5em;
    margin-bottom: 8px;
`;

const Subtitle = styled.div`
    font-size: 1.0em;
`;

export default class Banner extends React.Component {
    render() {
        const { title, subtitle, image } = this.props;

        return (
            <Container style={{
                backgroundImage:`url(${image})`
            }}>
                <InnerContainer>
                    <Title>
                        {title}
                    </Title>
                    <Subtitle>
                        {subtitle}
                    </Subtitle>
                </InnerContainer>
            </Container>
        );
    }
}

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;