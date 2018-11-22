import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { config } from '../../constants/general';
import { changeOpacity } from '../../utils/utils';

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

const baseShadow = `0 2px 4px rgba(0,0,0,0.1)`

const Container = styled.div`
    width: 100%;
    position: relative;
    margin-bottom:20px;
    padding: 8px;    
    
    border: 1px solid #EBEBEB;
    transition: box-shadow 200ms ease-in;
    border-radius: 1px;

    box-shadow: ${props => props.focused ? `${changeOpacity(config.color.key, 0.2)} 0px 4px 12px !important` : baseShadow };

    :hover {
        box-shadow:${`${baseShadow}, rgba(26, 26, 29, 0.08) 0px 4px 12px`};
    }
`;
const InputBox = styled.input`
    margin: 0;
    border: none;
    width: 100%;
    background-color:transparent;
    transition: padding-top 0.2s ease, margin-top 0.2s ease;
`;
const Label = styled.label`
    margin: 0;
    position: absolute;
    font-size: 1em;
    color: ${config.color.disabled};
    top: 50%;
    left: 8px;
    padding:px;
    opacity: ${props => props.show ? 1 : 0};
    transform: translateY(-50%);
    z-index: -1;
    transition: opacity 0.2s ease;
`;

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused:false,
            showPlaceholder:true,
        };
    }

    onFocus = () => {
        this.setState({ focused:true, showPlaceholder:false });
    }
    onBlur = () => {
        const { value } = this.props;
        
        this.setState({ focused:false, showPlaceholder:!value });
    }

    render() {
        const { id, label, value, onChange, type } = this.props;
        const { focused, showPlaceholder } = this.state;

        return (
            <Container focused={focused}>
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
                <Label show={showPlaceholder}>
                    {label}
                </Label>
            </Container>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;