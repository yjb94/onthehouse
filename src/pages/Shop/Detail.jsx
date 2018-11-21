import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';

const Container = styled.header`
    display:flex;
`;

@inject(store => ({
}))
@observer
class Detail extends React.Component {
    render() {
        return (
            <Container>
            </Container>
        );
    }
}

Detail.defaultProps = {
};

export default Detail;