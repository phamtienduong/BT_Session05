import React, { useState } from 'react'

export default function BT9() {
    const [count,setCount] = useState(0)

    const handleClick =()=>{
        setCount(count+1)
    }
  return (
    <>
        <p>Count:{count}</p>
        <button onClick={handleClick}>Click</button><br></br>
    </>
  )
}
