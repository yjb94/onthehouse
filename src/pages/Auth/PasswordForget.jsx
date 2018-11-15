import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
`;

@inject(store => ({
}))
@observer
class PasswordForget extends React.Component {
    render() {
        return (
            <Container>
            </Container>
        );
    }
}

PasswordForget.defaultProps = {
};

export default PasswordForget;