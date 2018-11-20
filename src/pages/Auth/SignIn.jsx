import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Input from '../../components/DataEntry/Input';
import { InputID } from '../../constants/ID';
import { FormattedMessage } from 'react-intl';

const Container = Styled.header`
`;
const Form = Styled.form`
    display:flex;
    flex-direction:column;
`;
const SignInButton = Styled.button`
`;
const ForgotPassword = Styled.button`
`;

@inject(store => ({
    auth:store.auth
}))
@observer
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
        }
    }

    onInputChange = (e) => {
        e.preventDefault();
        let state = {};
        state[e.target.id] = e.target.value;
        this.setState(state);
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, password } =  this.state;
        const { auth } =  this.props;

        if(this.validate()) {
            auth.login(email, password);
        } else {
            //TODO: err control
        }
    }
    validate = () => {
        //TODO: validation logic
        const { email, password } =  this.state;
        if(email && password)
            return true;
    }
    render() {
        const { email, password } =  this.state;

        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Input 
                        id={InputID.email} 
                        value={email} 
                        onChange={this.onInputChange}
                    />
                    <Input 
                        id={InputID.password} 
                        value={password} 
                        onChange={this.onInputChange}
                    />
                    <SignInButton onClick={this.onSubmit}>
                        <FormattedMessage id="Sign In"/>
                    </SignInButton>
                </Form>
                <ForgotPassword/>
            </Container>
        );
    }
}

SignIn.defaultProps = {
};

export default SignIn;