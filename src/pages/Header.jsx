import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import NavigationMenu from '../components/Navigation/NavigationMenu';
import NavigationItem from '../components/Navigation/NavigationItem';
import TabButton from '../components/Button/TabButton';
import { SIGN_IN, HOME, ACCOUNT, SHOP, BLOG } from '../constants/routes';
import { FormattedMessage } from 'react-intl';
import zIndex from '../constants/zIndex';
import Logo from '../assets/img/logo';
import { withRouter } from "react-router-dom";
import { config } from '../constants/general';
import { Category } from '../constants/ID';
import { getQueryParameter } from '../utils/utils';

const Container = styled.header`
    top: 0;
    left: 0;
    right: 0;
    background-color:white;
    position: fixed;
    z-index:${zIndex.Header};
`;
const MainHeader = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding: 30px 80px;
    max-height: 65px;
`;
const LeftContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    flex: 1;
`;
const MiddleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size: 40px;
`;
const LogoOnthehouse = styled.img`
    width: 177px;
    height:36.71px;
`;
const RightContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    flex: 1;
`;
const LogoutButton = styled.button`
`;

const TabContainer = styled.div`
    display:flex;
    position:relative;
    justify-content: flex-start;
    align-items: center;
    background-color:${config.color.aquaHaze};
    z-index:${zIndex.Category};
    padding:20px 50px;
`;

@inject(store => ({
    setHeaderHeight:store.screen.setHeaderHeight,
    user:store.auth.user,
    logout:store.auth.logout,
    headerTab:store.header.headerTab
}))
@observer
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount = () => {
        const { setHeaderHeight } = this.props;
        setHeaderHeight();
    }
    
    handleLogout = () => {
        this.props.logout();
    }

    renderAuthMenu() {
        const { user } = this.props;

        if(user) {
            return (
                <LogoutButton onClick={this.handleLogout}>
                    <FormattedMessage id="Logout"/>
                </LogoutButton>
            )
        } else {
            return (
                <NavigationItem data={SIGN_IN}/>
            )
        }
    }

    handleChangeIndex = (index) => {
        // this.setState({ tabIndex:index })
    }
    onClickTab = (e) => {
        e.preventDefault();
        const { id } = e.target;
        if(id) {
            const { history } = this.props;
            history.replace({
                pathname: SHOP.route,
                search: `?category=${id}`
            });
        }
    }


    render() {
        const { headerTab } = this.props;

        const tabsView = headerTab.map((each, idx) => {
            return (
                <TabButton  
                    id={each} 
                    key={idx}
                    label={each}
                    seperator={idx !== headerTab.length - 1}
                    active={each === getQueryParameter('category')}
                    onClick={this.onClickTab}
                />
            )
        })

        return (
            <Container id="header">
                <MainHeader>
                    <LeftContainer>
                        <NavigationMenu routes={[SHOP, HOME]}/>
                    </LeftContainer>
                    <MiddleContainer>
                        <NavigationItem data={HOME} custom={true}>
                            <LogoOnthehouse src={Logo.onthehouse}/>
                        </NavigationItem>
                    </MiddleContainer>
                    <RightContainer>
                        <NavigationMenu routes={[BLOG, ACCOUNT]}/>
                    </RightContainer>
                </MainHeader>

                <TabContainer>
                    {tabsView}
                </TabContainer>
            </Container>
        );
    }
}

Header.defaultProps = {
    
};

export default withRouter(Header);