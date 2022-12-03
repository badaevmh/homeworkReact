import React from 'react'; 
import ReactDOM from 'react-dom'; 

const App = (props) => {
    return (
    <div>
        <h1>React props</h1>
        <h2>Функциональный компонент</h2>
        <input type={'radiobutton'}></input>
    </div>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));