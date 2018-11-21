import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { DEFAULT_ROUTE } from '../../constants/routes';
import { withRouter } from "react-router-dom";
import { injectIntl } from 'react-intl'

const Conatiner = styled.button`
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
        const { data, custom, children, intl } = this.props;

        const name =  data.id ? intl.formatMessage({ id: data.id }) : data.name;

        return (
            <Conatiner onClick={this.onNav}>
                {custom ? children : name}
            </Conatiner>
        );
    }
}

NavigationItem.propTypes = {
    data: PropTypes.object.isRequired,
    custom: PropTypes.bool,
};
NavigationItem.defaultProps = {
    data: DEFAULT_ROUTE,
    custom: false
};

export default injectIntl(withRouter(NavigationItem));