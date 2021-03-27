import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import StreamPage from "./pages/StreamPage";
import OurTeamPage from "./pages/OurTeamPage";
import LogPage from "./pages/LogPage";

document.getElementById("HomeButton").addEventListener("click", function(){
    /*document.getElementById("HomeButton").style.borderBottomColor = "#F2E1C2";*/
    ReactDOM.render(HomePage(), document.getElementById('root'));
})

document.getElementById("NewsButton").addEventListener("click", function(){
    ReactDOM.render(NewsPage(), document.getElementById('root'));
})

document.getElementById("StreamButton").addEventListener("click", function(){
    ReactDOM.render(StreamPage(), document.getElementById('root'));
})

document.getElementById("TeamButton").addEventListener("click", function(){
    ReactDOM.render(OurTeamPage(), document.getElementById('root'));
})

document.getElementById("LogButton").addEventListener("click", function(){
    ReactDOM.render(LogPage(), document.getElementById('root'));
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


