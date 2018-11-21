import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import NavigationItem from '../../components/Navigation/NavigationItem';
import { ADMIN_PRODUCT } from '../../constants/routes';

const Container = Styled.div`
    display:flex;
`;

@inject(store => ({
}))
@observer
class Admin extends React.Component {
    render() {
        return (
            <Container>
                <NavigationItem data={ADMIN_PRODUCT}/>
            </Container>
        );
    }
}

Admin.defaultProps = {
};

export default Admin;