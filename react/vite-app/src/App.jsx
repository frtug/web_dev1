
// import React,{Component, useState} from 'react'
import './App.css'


function App({name,username}){
  return(
    
    <div className='bg-light-purple ma3'>
      <h2 className=''>{name }</h2>
      <img src={`https://robohash.org/${username}?size=200x200`} alt="robot" />

    </div>
    
    
  )
}
export default App


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
