import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from "styled-components";
import { Route } from 'react-router-dom';
import { inject } from 'mobx-react';
import * as routes from '../constants/routes';
import * as pages from './PageExporter';
import { firebaseApp } from '../module/firebase';
import Slider from '../components/Feedback/Slider';
import HamburgerMenu from '../components/Button/HamburgerMenu';
import NavigationMenu from '../components/Navigation/NavigationMenu';
import { UserType } from '../constants/ID';
import { GlobalStyle } from '../constants/globalStyles';

const propTypes = {};

const defaultProps = {};

const Contents = styled.div`
`;

const RootContainer = styled.div`
    width: -webkit-fill-available;
    height: -webkit-fill-available;

    margin: 0 auto;

    position:relative;
`;

@inject(store => ({
    onScroll:store.scroll.onScroll,
    scrollOffset:store.scroll.isScrolled,

    isMobileSize:store.screen.isMobileSize,
    resize:store.screen.resize,

    user:store.auth.user,
    getUser:store.auth.getUser,
    setUser:store.auth.setUser,

    slider:store.slider,

    route:store.route
}))
class App extends React.Component {
    componentWillMount = () => {
        //this function is fired when user is -
        // log in(now, when session was maintained) / logout
        firebaseApp.auth().onAuthStateChanged((currentUser) => {
            //get user data
            if(currentUser && !this.props.user) {
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

        const { history } = this.props;
        history.listen(this.onRouteChange);
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.scrollListener);
        window.removeEventListener('resize', this.resizeListener);
    }

    onRouteChange = (location, action) => {
        const { route } = this.props;
        route.onRouteChange(location, action)
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

    renderAdminRoutes() {
        return (
            <div>
                <Route exact path={routes.ADMIN.route}         component={pages.Admin}/>
                <Route exact path={routes.ADMIN_PRODUCT.route} component={pages.AdminProduct}/>  
            </div>          
        )
    }

    render() {
        const { isMobileSize, user } = this.props;

        return (
            <RootContainer>
                <GlobalStyle/>

                {/* {isMobileSize &&
                    <Slider>
                        <NavigationMenu/>
                    </Slider>
                } */}

                {/* {isMobileSize && <HamburgerMenu/>} */}

                <Header/>

                <Contents>
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
                    {user && user.role === UserType.admin && this.renderAdminRoutes()}
                </Contents>

                <Footer/>
            </RootContainer>
        );
    }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;