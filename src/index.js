import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TitleBox from './components/TitleBox';
import reportWebVitals from './reportWebVitals';
import CornerTitle from './components/CornerTitle';

ReactDOM.render(
  <React.StrictMode>
    {/* moved this order to show the title box first rather than on the lower half */}
    <CornerTitle/>
    <TitleBox/>
    <App/>
    
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
