import React from 'react';
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';
import LocaleItem from '../components/Global/LocaleItem';
import { config } from '../constants/general';
import Logo from '../assets/img/logo';

const propTypes = {};

const defaultProps = {};

const Container = styled.footer`
    background-color: ${config.color.capeCod};
    padding: 100px 50px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color:${config.color.silverChalice};
    font-size:14px;
    font-family: 'Noto Sans KR', sans-serif;
`;
const LogoOnthehouse = styled.div`
    font-family:'Sloop Script';
    font-size:30px;
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Line = styled.div`
    margin-top: 20px;
    margin-bottom: 60px;
    height:2px;
    width:80%;
    background-color:#F7703C;
`;
const LanguageContainer = styled.div`
`;
const Contacts = styled.div`
    font-size:1em;
    margin-bottom:40px;
    font-family: inherit;
`;
const Copyright = styled.div`
    font-size:0.8em;
    font-family: inherit;
`;

export default class Footer extends React.Component {
    render() {
        return (
            <Container>
                <LogoOnthehouse>
                    On the House
                    <Line/>
                </LogoOnthehouse>
                <Contacts>
                    onthehouse_@naver.com
                </Contacts>
                <Copyright>
                    Copyright© on the house, all rights reserved
                </Copyright>
                {/* <LanguageContainer>
                    <FormattedMessage id="Set Language"/>
                    <LocaleItem langId="Korean" localeTo="ko"/>
                    <LocaleItem langId="English" localeTo="en"/>
                </LanguageContainer> */}
            </Container>
        );
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;