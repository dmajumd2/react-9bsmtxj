import React, { useState } from 'react';

export default function Toggle() {
    
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>Toggle</button>
            <h2>{show && <p>Hello World.</p>}</h2>
        </>
    )
}