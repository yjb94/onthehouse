import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import moment from 'moment';
import { numberWithCommas } from '../../utils/utils';
import Image from './Image';

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

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    min-height: 400px;
    font-size: 18px;

    transition: opacity .3s ease-in, box-shadow .25s ease-in-out;
    opacity:${props => props.ready ? 1 : 0};

    :hover {
        box-shadow:0px 2px 30px rgba(0, 0, 0, 0.5);
    }
`;
const TextContainer = styled.div`
    text-align:center;
    padding: 20px;
`;
const Title = styled.div`
    font-weight:700;
    font-size: 1em;
    color:#444;
`;
const Description = styled.div`
    font-size: 0.8em;
    font-family: 'Noto Sans KR', sans-serif;
    color:#777;
`;
const Time = styled.div`
    font-size: 0.7em;
    color:#999;
`;
const Price = styled.div`
    font-size: 0.7em;
    color: #777;
    margin-top: 20px;
`;
const Divider = styled.div`
    width:20%;
    height:1px;
    background-color:black;
    margin: 20px auto;
`;

export default class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageReady:!props.image,
        }
    }

    onImageLoad = () => {
        this.setState({ imageReady:true });
    }

    render() {
        const { onClick, title, image, date, price, description, containerStyle } = this.props;
        const { imageReady } = this.state;
        
        return (
            <Container 
                onClick={onClick}
                ready={imageReady}
                style={{...containerStyle}}
            >
                {image && <Image src={image} onLoad={this.onImageLoad}/>}
                <TextContainer>
                    {date &&
                        <Time>
                            {moment(date).format('LL')}
                        </Time>
                    }
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