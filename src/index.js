import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

function AppTwo() {
  return <h1>this is second app code</h1>;
}

ReactDOM.render(
  <>
    {' '}
    <App login="rvpatel" />
  </>,
  document.getElementById('root')
);
