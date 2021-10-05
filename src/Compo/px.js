import React,{useState,useEffect} from 'react'
import './px.css'
import '../Compo/css/bootstrap.min.css'
export default function Px(props) {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
    let [Click, setClick] = useState(false)

    let [time, setTime] = useState(0)


    /*  ignore
    const x=()=>{
  
    setClick(Click+1)
  }

  const y=()=>{
  if(Click<=0)
  setClick(Click=0)
  else
    setClick(Click-1)}

    let interval=null
    const x=()=>{
    //  let interval=null
    setClick(Click=!Click)
    if(Click===true){

      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10)
     // if(Click=!Click){
       // clearInterval(interval)}

     // clearInterval(interval)
     // console.log(interval) 
     
    }
    else{
      clearInterval(interval)
      //setIsPaused(false)
    }
  }
    const z=()=>{
      if(Click==true){
      }
      }
    

    console.log(Click)
     */ // React.useEffect(() => {

    useEffect(() => {
      let interval = null;
    
      if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime(
          (time) => time + 1);
         
      }, 10);
      
      } else {
      clearInterval(interval);
      }
      return () => {
      clearInterval(interval);
      };
    }, [isActive, isPaused]);

    
    const x=()=>{
     
      setIsActive(true);
        setIsPaused(false);
        if(Click=!Click){
          setIsActive(false);
          setTime(0);
      }
      }
    const z=()=>{
      
      setIsPaused(!isPaused);
      
      }


      
var ran=parseInt(Math.random()*100)
    return (
        <div >
            <div>
              <h1>STOP</h1>
<h1 className="col-md-12 text-center">At {ran}</h1>

            <button className="btn lg" onClick={x}
		isPaused={isPaused}> Double click </button>
           
           <h1 className="col-md-12 text-center">{("0"+ Math.floor(((time / 1) % 100))).slice(-2) }</h1>
                  <button className="btn lg " onClick={z}> Pause/Resume </button>
            </div>
            
        </div>
    )
}
