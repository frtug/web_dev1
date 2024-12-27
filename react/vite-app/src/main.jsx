import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// const reactElement = createElement('h1',{className:"rr"},"Hello world")
const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    {/* {reactElement} */}
    <h1 className='rr'>Hello world</h1>
    <App name="Robot white" url="https://robohash.org/Robotwhite"/>
    <App name="Robot Green" url="https://robohash.org/RobotGreen"/>
    <App name="Robot red" url="https://robohash.org/Robotred"/>
    <App name="Robot yellow" url="https://robohash.org/Robotyellow"/>


  </StrictMode>,
)
