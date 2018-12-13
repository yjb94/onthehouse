import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const propTypes = {
    views:PropTypes.array.isRequired,
};

const defaultProps = {
    views:[]
};

const Container = styled.div`
    width: 100%;
    display:grid;
    grid-gap: 50px 30px;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    transition: .3s;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(33%, 1fr));
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    }
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