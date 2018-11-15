import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';

export default class Root extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/" component={App}/>
            </Router>
        );
    }
}