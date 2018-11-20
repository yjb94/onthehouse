import React from 'react';
import Styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = Styled.header`
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