import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";

const propTypes = {
    views:PropTypes.array.isRequired,
};

const defaultProps = {
    views:[]
};

const Container = Styled.div`
    width: 100%;
    display:grid;
    grid-gap: 50px 30px;
    grid-template-columns: repeat(auto-fill, minmax(25vw, 1fr));
`;

export default class Masonry extends React.Component {
    render() {
        const { views } = this.props;

        return (
            <Container>
                {views}
            </Container>
        );
    }
}

Masonry.propTypes = propTypes;
Masonry.defaultProps = defaultProps;