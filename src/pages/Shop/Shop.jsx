import React from 'react';
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import { withRouter } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import CreativeWorks from './Category/CreativeWorks';
import Goods from './Category/Goods';
import { Category } from '../../constants/ID';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

@inject(store => ({
    header:store.header,
    tabIdx:store.header.tabIdx,
    scrollOffset:store.scroll.offset,
    scrollTo:store.scroll.scrollTo
}))
@observer
class Shop extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollPositions:[]
        }
    }

    componentDidMount = () => {
        const { header } = this.props;
        header.setTab(Category);

        const { scrollPositions } = this.state;
        Category.forEach(_ => scrollPositions.push(0));
    }

    componentWillReceiveProps = (nextProps) => {
        const { tabIdx, scrollTo, scrollOffset } = this.props;
        const nextTabIdx = nextProps.tabIdx;

        //scroll position saving logic
        if(tabIdx !== nextTabIdx) {
            let { scrollPositions } = this.state;
            scrollPositions[tabIdx] = scrollOffset;
            scrollTo(scrollPositions[nextTabIdx]);
            this.setState( scrollPositions );
        }
    }

    componentWillUnmount = () => {
        const { header } = this.props;
        header.clearTab();
    }

    render() {
        const { tabIdx } = this.props;

        return (
            <Container>
                <SwipeableViews index={tabIdx} onChangeIndex={this.handleChange}>
                    <CreativeWorks/>
                    <Goods/>
                </SwipeableViews>
            </Container>
        );
    }
}

Shop.defaultProps = {
};

export default withRouter(Shop);