import React from 'react'

const Button = ({start,status,reset,stop}) => {
  return (
    <div>

{status === 0 && <button onClick={start}>START</button> }
    {status === 1 && 
        <div>
          <button onClick={reset}>RESET</button>&nbsp;
          <button onClick={stop}>STOP</button>
        </div>}

    </div>
    
    
  )
}

export default Button