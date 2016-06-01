# Pomodoro challenge

The Pomodoro is a ***time management technique*** that uses a timer to break the work time into intervals for maximize the productivity.

This app is a kind of pomodoro technique tool for help us. ;)

# How it Works

***Prerequisites*** (1):
```
npm install -g babel
npm install -g babel-cli
```

***Firstly install the dependencies***:
```
npm install
```

***secondly, for run the application***:
```
npm start
```

***At last, open in a browser at 'localhost:3000'***

***You can to run some tests too (Mocha)***:
```
npm test
```

# The component

The container component of pomodoro app is the ***App*** component.

For use it, you can call it into a jsx file:

Ex (main.js):

```jsx
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

```

***Thanks!!!***