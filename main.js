import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

import App from './components/container/App.jsx';

// Importing CSS files
require("./assets/css/style.css");
require("./assets/css/user-alert.css");

render(
    <App />,
    document.getElementById('root')
);
