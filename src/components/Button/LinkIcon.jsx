import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addIcon } from '../../module/fontawesome';

const propTypes = {
    link:PropTypes.string.isRequired,

    icon: (props, _, componentName) => {
        if (!props.icon && !props.iconName) {
          return new Error(`One of props 'icon' or 'iconName' was not specified in '${componentName}'.`);
        }
    },
    
    iconName: (props, _, componentName) => {
        if (!props.icon && !props.iconName) {
          return new Error(`One of props 'icon' or 'iconName' was not specified in '${componentName}'.`);
        }
    },

    iconPrefix:PropTypes.string,
    containerStyle:PropTypes.object,
};

const defaultProps = {
    link:"",
    iconName:"",
    iconPrefix:"fas",
    containerStyle:{}
};

const Container = styled.button`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default class LinkIcon extends React.Component {
    componentWillMount() {
        const { iconName, iconPrefix } = this.props;
        if(iconName) {
            addIcon(iconPrefix, iconName);
        }
    }
    
    linkTo = () => {
        window.open(this.props.link, '_blank')
    }

    render() {
        const { icon, iconName, iconPrefix, containerStyle } = this.props;

        return (
            <Container onClick={this.linkTo} style={{...containerStyle}}>
                <FontAwesomeIcon 
                    prefix={iconPrefix}
                    icon={icon || [iconPrefix, iconName]} 
                />
            </Container>
        );
    }
}

 LinkIcon.propTypes = propTypes;
 LinkIcon.defaultProps = defaultProps;