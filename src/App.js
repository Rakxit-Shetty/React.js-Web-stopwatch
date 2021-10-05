
import './App.css';
import Head from './Compo/Head'
import Home from './Compo/Home'
import DashB from './Compo/DashB'
import StopWatch from './Stpwtch/StpWatch';
import px from './Compo/px'
import React, { BrowserRouter as Router, Route } from  'react-router-dom';



function App() { 

  return (
    <>
   <div  className="App-header">
   <Router>
<Route path="/" exact  component={Home} />
<Route path="/DB"  component={DashB} />
<Route path="/Timmer"  component={StopWatch} />
<Route path="/px"  component={px} />
</Router>
       <Head />
        
    </div>
    

    </>
  );
}


export default App;
