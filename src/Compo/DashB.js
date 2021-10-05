import React, { Component} from 'react'

import "./CntButton.css";
let Res=true
class Msg extends Component{
   
    constructor(){
       
        super();
       
        this.state={
            Msg:"Click to know about Developer "
        }
    }
   
chng(){
    Res=false
    this.setState({
        Msg:"Just a friendly neighborhood noob Techie."
        
    })
   
//console.log("Here")
}
render(){
    return(
        <>
        <h1>{this.state.Msg}</h1><br></br>
{ 
    Res?<>
       <button className="btn btn-one btn-start" onClick={()=>this.chng()}>Here</button>  
       </>: null
}
      

 </>
    )
        
                 }
        }
    
export default Msg;

