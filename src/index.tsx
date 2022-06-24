import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import './index.css';


const LogoImage = styled.img`
    padding-top: 10px;
    width: 15%;
    padding-left: 20px;

`; // add your owns styles here

ReactDOM.render(
  <React.StrictMode>
    <div id="imagediv" className="position-absolute left-0 w-100 text-center d-md-block image-container">
      <LogoImage id="logoImage" alt="Support Crew" src="./images/mainlogo_white.png" className="logoImage"/>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);


// style={{
//   padding: 24,
//   paddingBottom: 10,
//   backgroundColor: '#151A1F',
//   // backgroundColor: '#4865c9',
//   borderRadius: 6,
// }}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
