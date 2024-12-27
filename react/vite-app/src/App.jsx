
// import React,{Component, useState} from 'react'
import './App.css'


function Card({name,url}){
  return(
    <>

    <h1 style={{color:"red"}} className='card'>{name }</h1>
    <img src={url} alt="robot" />

    </>
  )
}

// function App(props) {
//   // const [message,setMessage] = useState(props.msg) // hooks
//   // message = "nothing"
//   return (
//     <>
//       <h1>Hello + React</h1>
      
//       <p className="read-the-docs">
//         {/* {message} */}
//       </p>
//     </>
//   )
// }

// class App extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       message: props.msg
//     }
//   }
//   render(){
//     return (
//       <>
//         <h1>Hello + React</h1>
        
//         <p className="read-the-docs">
//           {this.state.message}
//         </p>
//       </>
//     )
//   }
  
// }
export default Card
