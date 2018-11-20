import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";
import moment from 'moment';
import { numberWithCommas } from '../../utils/utils';

const propTypes = {
    title:PropTypes.string,
    description:PropTypes.string,
    image:PropTypes.string,
    containerStyle:PropTypes.object,
};

const defaultProps = {
    title:"",
    description:"",
    containerStyle:{}
};

const Container = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height: 400px;
    font-size: 18px;
`;
const Image = Styled.div`
    overflow:hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 300px;
`;
const TextContainer = Styled.div`
    text-align:center;
    padding: 20px;
`;
const Title = Styled.div`
    font-weight:700;
    font-size: 1em;
    color:#444;
`;
const Description = Styled.div`
    font-size: 0.8em;
    color:#777;
`;
const Time = Styled.div`
    font-size: 0.7em;
    color:#999;
`;
const Price = Styled.div`
    font-size: 0.7em;
    color: #777;
    margin-top: 20px;
`;
const Divider = Styled.div`
    width:20%;
    height:1px;
    background-color:black;
    margin: 20px auto;
`;

export default class Card extends React.Component {
    render() {
        const { onClick, title, image, date, price, description, containerStyle } = this.props;
        
        return (
            <Container onClick={onClick} style={{...containerStyle}}>
                <Image
                    style={{ backgroundImage:`url(${image})` }}
                />
                <TextContainer>
                    <Time>
                        {moment(date).format('LL')}
                    </Time>
                    <Title>
                        {title}
                    </Title>
                    <Divider/>
                    <Description>
                        {description}
                    </Description>
                    {price &&
                        <Price>
                            {`$${numberWithCommas(price)}`}
                        </Price>
                    }
                </TextContainer>
            </Container>
        );
    }
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;