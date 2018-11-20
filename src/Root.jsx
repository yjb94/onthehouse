import React from 'react';
import { IntlProvider } from 'react-intl'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './pages/App';
import localeData from './locale/locale';

class Root extends React.Component {
    render() {
        return (
            <IntlProvider
                locale={localeData.locale}
                messages={localeData.messages}
            >
                <Router>
                    <Route path="/" component={App}/>
                </Router>
            </IntlProvider>
        );
    }
}

 export default Root;