import React from 'react';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';

const propTypes = {};

const defaultProps = {};

export default class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <Main/>
                <Footer/>
            </React.Fragment>
        );
    }
}

 App.propTypes = propTypes;
 App.defaultProps = defaultProps;