import React from 'react';
import Styled from "styled-components";
import LinkIcon from '../components/Button/LinkIcon';
import instagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
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
    background:${props => props.background || 'transparent'};
    color:${props => props.color || 'transparent'};
    font-size:20px;
    border-radius:50%;
`;

@inject(store => ({
    isMobileSize:store.screen.isMobileSize,
    setHeaderHeight:store.screen.setHeaderHeight,
}))
@observer
class Header extends React.Component {
    componentDidMount = () => {
        const { setHeaderHeight } = this.props;
        setHeaderHeight();
    }
    

    render() {
        const { isMobileSize } = this.props;

        return (
            <Container id="header">
                <LeftContainer>
                </LeftContainer>
                <MiddleContainer>
                    ON THE HOUSE
                </MiddleContainer>
                {!isMobileSize &&
                    <RightContainer>
                        <IconContainer color="#333">
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