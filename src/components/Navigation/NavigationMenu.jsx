import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { ACCOUNT, SHOP, BLOG, ADMIN } from '../../constants/routes';
import NavigationItem from './NavigationItem';
import { UserType } from '../../constants/ID';

const NavigationRoutes = [ SHOP, BLOG, ACCOUNT ];
const NavigationAdminRoutes = [ SHOP, BLOG, ACCOUNT, ADMIN ];

const Conatiner = styled.div`
    display:flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    padding-top:${props => props.top}px;
`;

@inject(store => ({
    slider:store.slider,
    user:store.auth.user,
    headerHeight:store.screen.headerHeight,
    isMobileSize:store.screen.isMobileSize
}))
@observer
class NavigationMenu extends React.Component {
    render() {
        const { headerHeight, isMobileSize, user } = this.props;
        let routes = NavigationRoutes;
        if(user && user.role === UserType.admin) {
            routes = NavigationAdminRoutes;
        }

        const itemsView = routes.map((each, idx) => {
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