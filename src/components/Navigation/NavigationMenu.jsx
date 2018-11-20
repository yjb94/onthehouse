import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { ACCOUNT, SHOP, BLOG } from '../../constants/routes';
import NavigationItem from './NavigationItem';

let NavigationRoutes = [ SHOP, BLOG, ACCOUNT ];

const Conatiner = Styled.div`
    display:flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    padding-top:${props => props.top}px;
`;

@inject(store => ({
    slider:store.slider,
    headerHeight:store.screen.headerHeight,
    isMobileSize:store.screen.isMobileSize
}))
@observer
class NavigationMenu extends React.Component {

    render() {
        const { headerHeight, isMobileSize } = this.props;

        const itemsView = NavigationRoutes.map((each, idx) => {
            return <NavigationItem key={idx} data={each}/>
        })

        return (
            <Conatiner top={isMobileSize ? headerHeight : 0} isMobile={isMobileSize}>
                {itemsView}
            </Conatiner>
        );
    }
}

NavigationMenu.defaultProps = {
};

export default NavigationMenu;