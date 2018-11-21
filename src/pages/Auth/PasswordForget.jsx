import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = styled.header`
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