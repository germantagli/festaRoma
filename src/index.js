import React from 'react';
import {render} from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';


// Routes
import AppRoutes from './routes';



render(
    <Router> 
        <AppRoutes />
    </Router>,
    document.getElementById('root')
);


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
