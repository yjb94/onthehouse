import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Input from "../../components/DataEntry/Input";
import { InputID } from '../../constants/ID';
import { FormattedMessage } from 'react-intl';

const Container = styled.header`
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
`;
const SubmitButton = styled.button`
`;

@inject(store => ({
    auth:store.auth
}))
@observer
class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
            passwordCfm:'',
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
            auth.register(email, password);
        } else {
            //TODO: err control
        }
    }
    validate = () => {
        //TODO: validation logic
        const { email, password, passwordCfm } =  this.state;
        if(email && password && passwordCfm && password === passwordCfm)
            return true;
    }

    render() {
        const { email, password, passwordCfm } =  this.state;

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
                    <Input 
                        id={InputID.passwordCfm}
                        value={passwordCfm}
                        onChange={this.onInputChange}
                    />
                    <SubmitButton 
                        onClick={this.onSubmit}
                    >
                        <FormattedMessage id="Sign Up"/>
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}

SignUp.defaultProps = {
};

export default SignUp;