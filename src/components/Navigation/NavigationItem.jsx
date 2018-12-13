import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { DEFAULT_ROUTE } from '../../constants/routes';
import { withRouter } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { config } from '../../constants/general';

const Conatiner = styled.button`
    position:flex;

    color:${props => props.active ? `${config.color.key}` : `${config.color.tundora}`};

    transition: color .2s ease-in-out, opacity .2s ease-in-out;
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
            <Conatiner 
                onClick={this.onNav}
                {...this.props}
            >
                {custom ? children : name}
            </Conatiner>
        );
    }
}

NavigationItem.propTypes = {
    data: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    custom: PropTypes.bool,
};
NavigationItem.defaultProps = {
    data: DEFAULT_ROUTE,
    custom: false,
    active: false
};

export default injectIntl(withRouter(NavigationItem));