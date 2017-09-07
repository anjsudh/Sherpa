import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {Trees} from './App';
import registerServiceWorker from './registerServiceWorker';

let components = (
  <div>
    <App />
    <Trees />
  </div>
);

ReactDOM.render(components, document.getElementById('root'));
registerServiceWorker();
