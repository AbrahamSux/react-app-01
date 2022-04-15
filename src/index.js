import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import App from './App';

import Example01 from './components/Example01'
import Example02 from './components/Example02'
import Example03 from './components/Example03'

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); */

ReactDOM.render(<Example03/>, document.getElementById('root'))
