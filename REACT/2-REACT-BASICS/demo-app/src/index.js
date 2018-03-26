import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css'; // global css


ReactDOM.render(<App title="demo-app"/>, document.getElementById('root'));
registerServiceWorker();
