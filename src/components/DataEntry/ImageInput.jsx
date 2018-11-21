import React, { Component } from 'react'
import styled from 'styled-components';
import exif from 'exif-js';
import { dataURItoFile } from '../../utils/utils';

const pica = require('pica')();

const Container = styled.div`
    position: relative !important;
    display: flex;
    justify-content:center;
    align-items: center;
`;
const FileInput = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
`

function readFile(file) {
    return new Promise(resolve => {
        var reader = new FileReader();
        reader.onload = e => resolve(e.target.result);
        reader.readAsDataURL(file);
    });
};
  
function createImage(data) {
    return new Promise(resolve => {
        const img = document.createElement('img');
        img.onload = () => resolve(img);
        img.src = data;
    })
}
  
function rotateAndResize(img) {
    return new Promise(resolve => {
        const canvas = document.createElement('canvas');
    
        exif.getData(img, function () {
            var orientation = exif.getAllTags(this).Orientation;
            var width = img.width;
            var height = img.height;
            
            var result = document.createElement('canvas');
            var MAX_WIDTH = 1024;
            var MAX_HEIGHT = 1024;
        
            if (width > height) {
                if (width > MAX_WIDTH) {
                    height *= MAX_WIDTH / width;
                    width = MAX_WIDTH;
                }
            } else {
                if (height > MAX_HEIGHT) {
                    width *= MAX_HEIGHT / height;
                    height = MAX_HEIGHT;
                }
            }
            result.width = width;
            result.height = height;

            pica.resize(canvas, result).then((canvas) => {
                if ([5, 6, 7, 8].indexOf(orientation) > -1) {
                    canvas.width = height;
                    canvas.height = width;
                } else {
                    canvas.width = width;
                    canvas.height = height;
                }
    
                var ctx = canvas.getContext("2d");
    
                switch (orientation) {
                    case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                    case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
                    case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
                    case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                    case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
                    case 7: ctx.transform(0, -1, -1, 0, height, width); break;
                    case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                    default: ctx.transform(1, 0, 0, 1, 0, 0);
                }
    
                ctx.drawImage(img, 0, 0, width, height);
                resolve({ canvas, img })
            })
        });
    })
}
  
class ImageInput extends Component {
    handleChange = (e) => {
        this.props.onLoadStart && this.props.onLoadStart()
        const file = e.target.files[0];

        if(file.type === 'image/gif') {
            readFile(file).then((res) => {
                this.props.onImageReady && this.props.onImageReady(res, file)
            })
        } else {
            readFile(file)
                .then(createImage)
                .then(rotateAndResize)
                .then(({ canvas, img }) => {
                    var dataurl = canvas.toDataURL(file.type);
                    this.props.onImageReady && this.props.onImageReady(img.src, dataURItoFile(file.name, dataurl))
                })
        }
    }

    handleClick = (e) => {
        if (this.props.onClick) this.props.onClick(e);
    }

    render() {
        return (
            <Container style={{
                ...this.props.containerStyle
            }}>
                <FileInput 
                    accept="image/*" 
                    type='file'
                    onChange={this.handleChange}
                    onClick={this.handleClick}
                    capture={this.props.camera || false}
                />
                image
            </Container>
        )
    }
}

export default ImageInput;