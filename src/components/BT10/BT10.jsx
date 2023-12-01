import React, { useState } from 'react'

export default function () {
    const [text,setText]=useState("");

    const handleChange=(e)=>{
        setText(e.target.value)
    }
  return (
    <>
        <h2>Đếm số ký tự trong đoạn văn bản</h2>
        <textarea value={text} onChange={handleChange}></textarea>
        <p>Số ký tự:{text.match(/[A-Za-z]/g) ? text.match(/[A-Za-z]/g).length : 0}</p>
        <p>Số chữ cái{text.trim().split(/\s+/).length-1} </p>
        <p>Số dòng:{text.split(/\n+/).length-1}</p>  
        <button onClick={()=>setText(text.toLowerCase())}>Click to Lowercase</button>
        <button onClick={()=>setText(text.toUpperCase())}>Click to Upercase</button>
    </>
  )
}
