import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import Input from '../../components/DataEntry/Input';
import { InputID } from '../../constants/ID';
import { injectIntl, FormattedMessage } from 'react-intl';
import StateButton, { ButtonState } from '../../components/Button/StateButton';

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top: 50px;
`;
const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:300px;
    height: 300px;
    justify-content: center;
    align-items: center;
    padding:25px;
    box-shadow: 0 2px 50px 0 rgba(0, 0, 0, 0.2);
`;
const ForgotPassword = styled.button`
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
        const { intl, auth } = this.props;
        const { email, password } =  this.state;

        return (
            <Container>
                <Form onSubmit={this.onSubmit}>
                    <Input 
                        id={InputID.email} 
                        value={email} 
                        onChange={this.onInputChange}
                        type={'email'}
                        label={intl.formatMessage({ id: 'Email' })}
                    />
                    <Input 
                        id={InputID.password} 
                        value={password} 
                        onChange={this.onInputChange}
                        type={'password'}
                        label={intl.formatMessage({ id: 'Password' })}
                    />
                    <StateButton onClick={this.onSubmit} buttonState={auth.isFetching ? ButtonState.loading : ButtonState.idle}>
                        <FormattedMessage id="Sign In"/>
                    </StateButton>
                </Form>
                <ForgotPassword/>
            </Container>
        );
    }
}

SignIn.defaultProps = {
};

export default injectIntl(SignIn);