import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const propTypes = {
    value:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    id:PropTypes.string,
    type:PropTypes.string,
    label:PropTypes.string,
    multiline:PropTypes.bool,
};

const defaultProps = {
    value:'',
    label:'',
    type:'text',
    multiline:false
};

const Container = styled.div`
    width: 100%;
    position: relative;
    height: 2em;
    margin-bottom:20px;
`;
const InputBox = styled.input`
    margin: 0;
    border: none;
    width: 100%;
    background-color:transparent;
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
`;
const Label = styled.label`
    display: block;
    position: relative;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    border-top: 1px solid #999;
    transition: width 0.4s ease;
    height: 0px;

    >span {
        margin: 0;
        position: absolute;
        font-size: ${props => props.focused ? '0.6em' : '1em'};
        color: #8F8F8F;
        top: ${props => props.focused ? '-3.5em' : '-1.2em'};
        left: 0px;
        z-index: -1;
        transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
    }
`;

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused:false
        };
    }
    onFocus = () => {
        this.setState({ focused:true });
    }
    onBlur = () => {
        const { value } = this.props;
        if(!value) this.setState({ focused:false });
    }

    render() {
        const { id, label, value, onChange, type } = this.props;
        const { focused } = this.state;

        return (
            <Container>
                <InputBox 
                    id={id} 
                    value={value} 
                    type={type}
                    onChange={onChange} 
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    autoComplete="off"
                    focused={focused}
                />
                <Label focused={focused}>
                    <span>{label}</span>
                </Label>
            </Container>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;