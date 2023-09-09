import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './Info.jsx';
import About from './About.jsx';
import Interests from './Interests.jsx';
import Footer from './Footer.jsx';
import profilePic from "./assets/Julie_JobPic.jpg";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "app-all">
      <img className = "image-profile" src = {profilePic} />
      <div className = "digital-card-bottom">
        <Info />
        <About />
        <Interests />
        </div>
        <div className = "digital-card-footer">
        <Footer />
        </div>
      </div>
    </>
  )
}

export default App

// import { useState } from 'react';
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Info from "./Info.js"
// import About from './About.js';
// import Interests from './Interests.js';
// import Footer from './Footer.js';
// import './App.css';

// export default function App(){
//   const [count, setCount] = useState(0)
//   return(
//     <div>
//       <Info />
//       <About />
//       <Interests />
//       <Footer />
//     </div>

//   )
// }

{/* <a href="https://vitejs.dev" target="_blank">
<img src={viteLogo} className="logo" alt="Vite logo" />
</a>
<a href="https://react.dev" target="_blank">
<img src={reactLogo} className="logo react" alt="React logo" />
</a>
</div>
<h1>Vite + React</h1>
<div className="card">
<button onClick={() => setCount((count) => count + 1)}>
count is {count}
</button>
<p>
Edit <code>src/App.jsx</code> and save to test HMR
</p>
</div>
<p className="read-the-docs">
Click on the Vite and React logos to learn more
</p> */}