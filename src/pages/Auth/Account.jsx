import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = styled.header`
`;

@inject(store => ({
    user:store.auth.user
}))
@observer
class Account extends React.Component {
    render() {
        const { user } = this.props;
        if(!user) return null;

        return (
            <Container>
                {user.email}
            </Container>
        );
    }
}

Account.defaultProps = {
};

export default Account;