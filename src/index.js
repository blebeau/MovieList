import React from "react";
import ReactDOM from "react-dom";
import List from './containers/list';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <div >
            <List />
        </div>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));