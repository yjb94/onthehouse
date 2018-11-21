import React from 'react';
import styled from "styled-components";
import LinkIcon from '../components/Button/LinkIcon';
import instagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import { observer, inject } from 'mobx-react';
import NavigationMenu from '../components/Navigation/NavigationMenu';
import NavigationItem from '../components/Navigation/NavigationItem';
import { SIGN_IN, HOME } from '../constants/routes';
import { FormattedMessage } from 'react-intl';

const Container = styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding: 40px 30px;
    max-height: 100px;
    top: 0;
    left: 0;
    right: 0;
    background-color:white;
    position: fixed;
`;
const LeftContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;

    font-size: 30px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;
const MiddleContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 1;
`;
const RightContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex: 1;
`;
const LogoutButton = styled.button`
`;
const IconContainer = styled.div`
    margin-left: 8px;
    background:${props => props.background || 'transparent'};
    color:${props => props.color || 'transparent'};
    font-size:20px;
    border-radius:50%;
`;

@inject(store => ({
    isMobileSize:store.screen.isMobileSize,
    setHeaderHeight:store.screen.setHeaderHeight,
    user:store.auth.user,
    logout:store.auth.logout,
}))
@observer
class Header extends React.Component {
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

    render() {
        const { isMobileSize } = this.props;

        return (
            <Container id="header">
                <LeftContainer>
                    <NavigationItem data={HOME} custom={true}>
                        ON THE HOUSE
                    </NavigationItem>
                </LeftContainer>
                {!isMobileSize && 
                    <MiddleContainer>
                        <NavigationMenu/>
                    </MiddleContainer>
                }
                <RightContainer>
                    {!isMobileSize && this.renderAuthMenu()}
                    {/* <IconContainer color="#333">
                        <LinkIcon 
                            link="https://www.instagram.com/songsong.yo/"
                            icon={instagram}
                        />
                    </IconContainer>
                    <IconContainer color="#333">
                        <LinkIcon 
                            link="http://blog.naver.com/onthehouse_"
                            iconName={"square"}
                        />
                    </IconContainer> */}
                </RightContainer>
            </Container>
        );
    }
}

Header.defaultProps = {
    
};

export default Header;