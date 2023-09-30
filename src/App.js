import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

function App() {

  const [time,setTime] = useState({h:0,m:0,s:0,ms:0})
  const [inter,setInter] = useState();
  const [status,setStatus] = useState(0)


   var updatedH = time.h,updatedM = time.m,updatedS = time.s,updatedMS = time.ms;


   const start = ()=>{
   run();
   setInter(setInterval(run,10))
   setStatus(1)
   }
   

   const run = ()=>{
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }if(updatedMS === 100){
      updatedS++;
      updatedMS = 0;
    }

    updatedMS++;

    return setTime({h:updatedH,m:updatedM,s:updatedS,ms:updatedMS})
   }


   //STOP

   const stop = ()=>{
    clearInterval(inter)

    setStatus(0)

   }



   //RESET



   const reset = ()=>{

    clearInterval(inter)
    setTime({h:0,m:0,s:0,ms:0})
    setStatus(0)

   }

  return (
    <div className="App">
      <h1>STOP-WATCH</h1>

      <Display time={time}/>
      <Button start={start} reset={reset} stop={stop} status = {status}/>
      
    </div>
  );
}

export default App;
