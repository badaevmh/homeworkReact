import React from 'react'; 
import ReactDOM from 'react-dom'; 
import createReactClass from 'create-react-class';

React.createClass = createReactClass;

const App = React.createClass({
    render() {
        return <div>
        <h1>React.createClass</h1>
        <h2>Дедовский метод</h2>
        </div>
    }
})

ReactDOM.render(<App />, document.getElementById('root'));