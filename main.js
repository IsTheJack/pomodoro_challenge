import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/App.jsx';

// Importing CSS files
require("./assets/css/layout.css");

render(
    <App />,
    document.getElementById('app')
);
