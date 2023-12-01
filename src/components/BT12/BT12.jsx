import React, { useState } from 'react'

export default function () {
    const [seconds,setSeconds]=useState(0)

    const handleStart = ()=>{
        
    }
  return (
    <>
        <p>Đếm thời gian:</p>
        <button onClick={handleStart}>Bắt đầu</button>
        <button>Dừng</button>
    </>
  )
}
