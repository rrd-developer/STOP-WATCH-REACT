import React from 'react'

const Display = ({time}) => {

    const {h,m,s,ms} = time;
  return (
   <div>
    <span>
        {h >=10 ? h : "0" + h}
    </span>
    :
    <span>
        {m>=10 ? m :"0" + m}
    </span>
    :
    <span>
        {s>=10 ? s :"0" + s}
    </span>
    :
    <span>
        {ms>=10 ? ms :"0" + ms}
    </span>
   </div>
  )
}

export default Display