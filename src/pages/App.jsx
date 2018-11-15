import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import Styled, { createGlobalStyle } from "styled-components";
import { inject } from 'mobx-react';

const propTypes = {};

const defaultProps = {};

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
    }
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

@inject(store => ({
    onScroll:store.scroll.onScroll,
    resize:store.screen.resize,
}))
class App extends React.Component {


    componentDidMount = () => {
        window.addEventListener('scroll', this.scrollListener);
        window.addEventListener('resize', this.resizeListener);
        this.scrollListener();
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.resizeListener);
    }
    resizeListener = () => {
        this.scrollListener();
        const { resize } = this.props;
        resize();
    }
    
    scrollListener = () => {
        const { onScroll } = this.props;
        onScroll();
    }
    

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

 export default App;