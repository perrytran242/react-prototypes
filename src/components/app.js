import React from 'react';
import Clock from './clock';

const App = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">
                Redux Clock
            </h1>
            <Clock/>
        </div>
    )
}

export default App;