import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'tachyons'
import data from './assets/data.js'

// const reactElement = createElement('h1',{className:"rr"},"Hello world")

const root = createRoot(document.getElementById('root'))

function CardComponent(){
  return(
    <>
    {
      data.map((obj,i)=>
        <App key={i} name={data[i].name} username={data[i].username}/>
      )}
    </>
  )
}
// https://tachyons.io/docs/
root.render(
  <StrictMode>
    {/* {reactElement} */}
    <h1 className=''>Robots App</h1>
    <input type="text" placeholder='search Robot' />
    <div className='flex flex-wrap justify-center'>

     <CardComponent/>
    </div>
    
  </StrictMode>,
)
