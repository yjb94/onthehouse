import React from 'react';
import styled from "styled-components";
import { FormattedMessage } from 'react-intl';
import { getLocale, setLocale } from '../../utils/utils';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

const propTypes = {
    langId:PropTypes.string.isRequired,
    localeTo:PropTypes.string.isRequired,
};

const defaultProps = {
    langId:'English',
    localeTo:getLocale()
};

const Container = styled.button`
`;

class LocaleItem extends React.Component {
    onClick = () => {
        const { history, localeTo } = this.props;
        if(getLocale() !== localeTo) {
            setLocale(localeTo);
            history.go(0);
        }
    }

    render() {
        const { langId } = this.props;

        return (
            <Container onClick={this.onClick}>
                <FormattedMessage id={langId}/>
            </Container>
        );
    }
}

LocaleItem.propTypes = propTypes;
LocaleItem.defaultProps = defaultProps;

export default withRouter(LocaleItem);