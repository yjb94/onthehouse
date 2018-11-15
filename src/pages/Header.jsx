import React from 'react';
import Styled from "styled-components";
import HamburgerMenu from '../components/HamburgerMenu';
import LinkIcon from '../components/LinkIcon';
import instagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding: 40px 30px;
    top: 0;
    left: 0;
    right: 0;
    background-color:white;

    position: ${props => props.fixed ? "fixed" : "inherit"};
`;
const LeftContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex: 1;
`;
const MiddleContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:center;

    font-size: 30px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    /* flex: 1; */
`;
const RightContainer = Styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    flex: 1;
`;
const IconContainer = Styled.div`
    margin-left: 8px;
    background:${props => props.color};
    color:white;
    border-radius:50%;
`;

@inject(store => ({
    scrollOffset:store.scroll.isFixed,
    isMobileSize:store.screen.isMobileSize
}))
@observer
class Header extends React.Component {
    render() {
        const { scrollOffset, isMobileSize } = this.props;

        let isFixed = scrollOffset > 0;

        return (
            <Container fixed={isFixed}>
                <LeftContainer>
                    <HamburgerMenu/>
                </LeftContainer>
                <MiddleContainer>
                    ON THE HOUSE
                </MiddleContainer>
                {!isMobileSize &&
                    <RightContainer>
                        <IconContainer color="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)">
                            <LinkIcon 
                                link="https://www.instagram.com/songsong.yo/"
                                icon={instagram}
                            />
                        </IconContainer>
                        <IconContainer color="red">
                            <LinkIcon 
                                link="#"
                                iconName={"plane"}
                            />
                        </IconContainer>
                        <IconContainer color="#2eb300">
                            <LinkIcon 
                                link="http://blog.naver.com/onthehouse_"
                                iconName={"square"}
                            />
                        </IconContainer>
                    </RightContainer>
                }
            </Container>
        );
    }
}

Header.defaultProps = {
    
};

export default Header;