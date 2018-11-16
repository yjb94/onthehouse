import React from 'react';
import Styled from "styled-components";
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { DEFAULT_ROUTE } from '../../constants/routes';
import { withRouter } from "react-router-dom";

const Conatiner = Styled.div`
    position:flex;
`;

@inject(store => ({
    closeSlider:store.slider.close
}))
@observer
class NavigationItem extends React.Component {
    onNav = () => {
        const { history, data, closeSlider } = this.props;
        history.push(data.route)
        closeSlider();
    }

    render() {
        const { data } = this.props;

        return (
            <Conatiner onClick={this.onNav}>
                {data.name}
            </Conatiner>
        );
    }
}

NavigationItem.propTypes = {
    data: PropTypes.object.isRequired,
};
NavigationItem.defaultProps = {
    data: DEFAULT_ROUTE
};

export default withRouter(NavigationItem);