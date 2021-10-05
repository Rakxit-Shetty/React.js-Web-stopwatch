
//import { createClass, PropTypes } from 'react'


import React  from 'react-router-dom'
//import {useHistory}  from 'react-router-dom'
import '../Compo/css/bootstrap.min.css'
//import React, { BrowserRouter as Router, Route } from  'react-router-dom';

//import StopWatch from '../Stpwtch/StpWatch';

 function Home() {
     const Home ={
        displayName: "LAP",
        exp: "gogo",
        title: "STOPWATCH"
                }
       // const {ingredients, steps, title} = this.Homee
       const z=()=>{
      
        /*<Router>

        <Route path="/Timmer"  component={StopWatch} />
        
        </Router>
         let path=StopWatch
        let history=useHistory
        history.pushS(path) */
       }
       
    return (
        <>
        <div>
             <div>
 <h1>{Home.title}</h1>
 <p>
     <div ClassName="col-md-12 text-center" >
     <h2 align="center">{Home.displayName} </h2> <br/>
    
    <div align="center">  
    <a href="/Timmer" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24"></svg>
                <button className="btn lg " align="center" onClick={z}>Play</button>  
                </a> 
   
   
    </div>
    
     </div>
 
 </p>
 </div>

        </div>
        
       </>
    )
}

export default Home;
