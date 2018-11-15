import React from 'react';
import Styled from "styled-components";
import HamburgerMenu from '../components/HamburgerMenu';
import LinkIcon from '../components/LinkIcon';
import instagram from '@fortawesome/fontawesome-free-brands/faInstagram'

const Container = Styled.header`
    display:flex;
    flex-direction:row;
    align-items:center;
    padding: 40px 30px;
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

class Header extends React.Component {
    render() {

        return (
            <Container>
                <LeftContainer>
                    <HamburgerMenu/>
                </LeftContainer>
                <MiddleContainer>
                    ON THE HOUSE
                </MiddleContainer>
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
            </Container>
        );
    }
}

Header.defaultProps = {
    
};

export default Header;