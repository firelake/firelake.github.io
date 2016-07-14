import React from 'react';
import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = React.createClass({
    render: function () {
        return (
            <MuiThemeProvider>
                <AppBar title="Firelake" createClass='blog-header' />
            </MuiThemeProvider>
        );
    }
});

ReactDOM.render(
    <App />, document.getElementById('app')
);