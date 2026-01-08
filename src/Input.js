import React, { useState, useEffect } from 'react';

export default function Input() {
    
    const [inputName, setInput] = useState("");

    return (
        <>
            <h1>Enter Name:</h1>
            <input type='text' value={inputName} onChange={(e)=>setInput(e.target.value)}/>
            <h1>Persons Name entered:</h1>
            <h2>{inputName}</h2>
        </>
    )
}