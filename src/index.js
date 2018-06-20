import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import jobs from './data/jobs.json';

ReactDOM.render(<App jobs={jobs} />, document.getElementById('root'));
registerServiceWorker();
