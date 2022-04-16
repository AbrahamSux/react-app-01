import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';

import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Example03 from './components/Example03'
import Example04 from './components/Example04'
import Example05 from './components/Example05'
import Example06 from './components/Example06'
import ObjectAssign from './components/ObjectAssign'
import Spread from './components/Spread'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(<App/>, document.getElementById('root'))
