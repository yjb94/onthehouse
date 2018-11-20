import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
    display:flex;
`;

@inject(store => ({
}))
@observer
class Cart extends React.Component {
    render() {
        return (
            <Container>
            </Container>
        );
    }
}

Cart.defaultProps = {
};

export default Cart;