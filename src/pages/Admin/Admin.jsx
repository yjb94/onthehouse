import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import NavigationItem from '../../components/Navigation/NavigationItem';
import { ADMIN_PRODUCT } from '../../constants/routes';

const Container = styled.div`
    display:flex;
    flex-direction:column;
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