import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
`;
const Form = Styled.form`
    display:flex;
    flex-direction:column;
`;
const EmailInput = Styled.input`
`;
const PasswordInput = Styled.input`
`;
const SubmitButton = Styled.button`
`;
const ForgotPassword = Styled.button`
`;

@inject(store => ({
}))
@observer
class SignIn extends React.Component {
    render() {
        return (
            <Container>
                <Form>
                    <EmailInput/>
                    <PasswordInput/>
                    <SubmitButton/>
                </Form>
                <ForgotPassword/>
            </Container>
        );
    }
}

SignIn.defaultProps = {
};

export default SignIn;