import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Info from "./Info.jsx"
import About from './About.jsx';
import Interests from './Interests.jsx';
import Footer from './Footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



// ReactDOM.render(Page, document.getElementById("root"));
