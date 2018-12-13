import React from 'react';
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';
import LocaleItem from '../components/Global/LocaleItem';

const propTypes = {};

const defaultProps = {};

const Container = styled.footer`
    background-color: #ddd;
    padding: 100px 50px;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color:#999;
`;
const LanguageContainer = styled.div`
`;

export default class Footer extends React.Component {
    render() {
        return (
            <Container>
                Copyright© on the house, all rights reserved
                <LanguageContainer>
                    <FormattedMessage id="Set Language"/>
                    <LocaleItem langId="Korean" localeTo="ko"/>
                    <LocaleItem langId="English" localeTo="en"/>
                </LanguageContainer>
            </Container>
        );
    }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;