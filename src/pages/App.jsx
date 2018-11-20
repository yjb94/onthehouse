import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Styled, { createGlobalStyle } from "styled-components";
import { Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import * as routes from '../constants/routes';
import * as pages from './PageExporter';
import { firebaseApp } from '../module/firebase';
import Slider from '../components/Feedback/Slider';
import HamburgerMenu from '../components/Button/HamburgerMenu';
import NavigationMenu from '../components/Navigation/NavigationMenu';

const propTypes = {};

const defaultProps = {};

const Contents = Styled.div`
    padding-top:${props => props.top}px;
`;

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
    scrollOffset:store.scroll.isScrolled,

    headerHeight:store.screen.headerHeight,
    isMobileSize:store.screen.isMobileSize,
    resize:store.screen.resize,

    user:store.auth.user,
    getUser:store.auth.getUser,
    setUser:store.auth.setUser,

    slider:store.slider
}))
class App extends React.Component {
    componentWillMount = () => {
        //this function is fired when user is -
        // log in(now, when session was maintained) / logout
        firebaseApp.auth().onAuthStateChanged((currentUser) => {
            //get user data
            if(currentUser) {
                this.props.getUser();
            }
        });
    }
    componentWillReceiveProps(nextProps) {
        if(!this.props.user && nextProps.user) {
            // handle after login
            // TODO redirection url change
            this.props.history.push('/');
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
        const { onScroll, slider } = this.props;
        onScroll();
        slider.close();
    }

    render() {
        const { isMobileSize, headerHeight } = this.props;

        return (
            <RootContainer>
                <GlobalStyle/>

                <Slider>
                    <NavigationMenu/>
                </Slider>

                {isMobileSize && <HamburgerMenu/>}

                <Header/>

                <Contents top={headerHeight}>
                    <Route exact path={routes.LANDING.route} component={pages.Home}/>
                    <Route exact path={routes.HOME.route}    component={pages.Home}/>
                    <Route exact path={routes.SIGN_IN.route} component={pages.SignIn}/>
                    <Route exact path={routes.SIGN_UP.route} component={pages.SignUp}/>
                    <Route exact path={routes.ACCOUNT.route} component={pages.Account}/>
                    <Route exact path={routes.SHOP.route}    component={pages.Shop}/>
                    <Route exact path={routes.BLOG.route}    component={pages.Blog}/>
                    <Route exact path={routes.POSTING.route} component={pages.Posting}/>
                    <Route exact path={routes.DETAIL.route}  component={pages.Detail}/>
                    <Route exact path={routes.CART.route}    component={pages.Cart}/>
                </Contents>

                <Footer/>
            </RootContainer>
        );
    }
}

 App.propTypes = propTypes;
    App.defaultProps = defaultProps;

    export default App;