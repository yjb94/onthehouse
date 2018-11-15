import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
`;

@inject(store => ({
}))
@observer
class SignUp extends React.Component {
    render() {
        return (
            <Container>
            </Container>
        );
    }
}

SignUp.defaultProps = {
};

export default SignUp;