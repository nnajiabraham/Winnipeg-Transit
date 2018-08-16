import React from 'react';
import ReactDom from 'react-dom';


class App extends React.Component {
    render () {
        return <p>This is my react boilerplate</p>
    }
}

ReactDom.render(<App />, document.getElementById('app'));