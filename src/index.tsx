import 'core-js'
import React from 'react'
import * as ReactDOM from 'react-dom/client';
import App from './App'

// React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// currentVersion < React 18
/*
ReactDOM.render(<App />, document.getElementById('root'))
*/

