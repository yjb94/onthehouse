import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { HOME, SIGN_IN, SIGN_UP, ACCOUNT } from '../../constants/routes';
import NavigationItem from './NavigationItem';

const NavigationRoutes = [ HOME, SIGN_IN, SIGN_UP, ACCOUNT ];

const Conatiner = Styled.div`
    display:flex;
    flex-direction: column;
    padding-top:${props => props.top}px;
`;

@inject(store => ({
    slider:store.slider,
    headerHeight:store.screen.headerHeight,
}))
@observer
class NavigationMenu extends React.Component {

    render() {
        const { headerHeight } = this.props;

        const itemsView = NavigationRoutes.map((each, idx) => {
            return <NavigationItem key={idx} data={each}/>
        })

        return (
            <Conatiner top={headerHeight}>
                {itemsView}
            </Conatiner>
        );
    }
}

NavigationMenu.defaultProps = {
};

export default NavigationMenu;