import React from 'react';

function App(props) {
    return (
        <div className="container">
            {props.children}
        </div>
    );
}

export default App;