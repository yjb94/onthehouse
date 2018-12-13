import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { withRouter } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import CreativeWork from './Category/CreativeWork';
import Goods from './Category/Goods';
import { Category } from '../../constants/ID';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

@inject(store => ({
    header:store.header
}))
@observer
class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    componentDidMount = () => {
        const { header } = this.props;
        header.setHeaderTab(Category);
    }
    componentWillUnmount = () => {
        const { header } = this.props;
        header.clearHeaderTab();
    }

    render() {
        const { index } = this.state;

        return (
            <Container>
                <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <CreativeWork/>
                    <Goods/>
                </SwipeableViews>
            </Container>
        );
    }
}

Shop.defaultProps = {
};

export default withRouter(Shop);