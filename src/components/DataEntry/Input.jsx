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
const paddingNum = 8;
const padding = `${paddingNum}px`;

const Container = styled.div`
    width: 100%;
    position: relative;
    margin-bottom:20px;
    padding: ${padding};    
    
    border: 1px solid #EBEBEB;
    transition: box-shadow 200ms ease-in;
    border-radius: 1px;
    
    box-sizing: border-box;
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
const TextArea = styled.textarea`
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
    top: ${props => props.multiline ? `${paddingNum+2}px` : '50%'};
    /* left: ${`${paddingNum+2}px`}; */
    left: ${padding};
    opacity: ${props => props.show ? 1 : 0};
    transform: ${props => props.multiline ? 'none' : 'translateY(-50%)'};
    z-index: -1;
    transition: opacity 0.2s ease;
`;

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            focused:false,
        };
    }

    onFocus = () => {
        this.setState({ focused:true });
    }
    onBlur = () => {
        this.setState({ focused:false });
    }

    render() {
        const { id, label, value, onChange, type, multiline } = this.props;
        const { focused } = this.state;

        return (
            <Container focused={focused}>
                {multiline ? 
                    <TextArea
                        id={id} 
                        value={value} 
                        type={type}
                        onChange={onChange} 
                        onFocus={this.onFocus}
                        onBlur={this.onBlur}
                        autoComplete="off"
                        focused={focused}
                    />
                    :
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
                }
                <Label show={!value} multiline={multiline}>
                    {label}
                </Label>
            </Container>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;