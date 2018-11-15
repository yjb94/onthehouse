import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Styled, { createGlobalStyle } from "styled-components";

const propTypes = {};

const defaultProps = {};

const GlobalStyle = createGlobalStyle`
    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: transparent;
        cursor: pointer;
    }
    button:focus {
        outline: none;
    }
`

const RootContainer = Styled.div`
    width: -webkit-fill-available;
    height: -webkit-fill-available;
`;

export default class App extends React.Component {
    render() {
        return (
            <RootContainer>
                <GlobalStyle/>
                <Header/>
                <Main/>
                <Footer/>
            </RootContainer>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;