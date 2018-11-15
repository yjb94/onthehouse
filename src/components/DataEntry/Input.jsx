import React from 'react';
import PropTypes from 'prop-types';
import Styled from "styled-components";

const propTypes = {
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    id:PropTypes.string,
    label:PropTypes.string,
    placeholder:PropTypes.string,
};

const defaultProps = {
    value:'',
    label:'',
    placeholder:'type something...'
};

const Container = Styled.div`
    width: 100%;
`;
const InputBox = Styled.input`
`;

export default class Input extends React.Component {
    render() {
        const { id, label, value, onChange, placeholder } = this.props;

        return (
            <Container>
                <InputBox id={id} value={value} onChange={onChange}/>
            </Container>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;