import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';

const Conatiner = styled.div`
    display:flex;
    flex-direction: ${props => props.isMobile ? 'column' : 'row'};
    padding-top:${props => props.top}px;

    font-family: 'Avenir Next', sans-serif;
`;

@inject(store => ({
    slider:store.slider,
    headerHeight:store.screen.headerHeight,
    isMobileSize:store.screen.isMobileSize,
    curRoute:store.route.curRoute,
}))
@observer
class NavigationMenu extends React.Component {
    render() {
        const { headerHeight, isMobileSize, routes, curRoute } = this.props;

        const itemsView = routes.map((each, idx) => {
            const active = each.route === curRoute.pathname;
            return (
                <NavigationItem 
                    key={idx}
                    data={each}
                    active={active}
                    style={{
                        margin:'0px 30px'
                    }}
                />
            )
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

NavigationMenu.propTypes = {
    routes:PropTypes.array.isRequired,
}

export default NavigationMenu;