import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Styled, { createGlobalStyle } from "styled-components";
import { Route, IndexRoute } from 'react-router-dom';
import { inject } from 'mobx-react';
import * as routes from '../constants/routes';
import * as pages from './PageExporter';
import { firebaseApp } from '../module/firebase';

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
    user:store.auth.user
}))
class App extends React.Component {
    componentWillMount = () => {
        firebaseApp.auth().onAuthStateChanged((currentUser) => {
            //get user data
            console.log('auth state change', currentUser);
        });
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.user) {
            // handle after login
            console.log('logged in');
            // this.props.history.push('/');
        }
    }

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

                <Route exact path={routes.LANDING} component={pages.Home}/>
                <Route exact path={routes.HOME}    component={pages.Home}/>
                <Route exact path={routes.SIGN_IN} component={pages.SignIn}/>
                <Route exact path={routes.SIGN_UP} component={pages.SignUp}/>

                <Footer/>
            </RootContainer>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;

 export default App;