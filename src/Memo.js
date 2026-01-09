import React, { useCallback, useState } from 'react';

const Child = React.memo(({ onClick }) => {
    console.log("Child render");
    return <button onClick={onClick}>Click</button>
})

export default function Memo() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("Clicked")
    }, []);

    return (
        <>
        <p>{count}</p>
        <button onClick={() => setCount(count+1)}>+</button>
        <Child onClick={handleClick}></Child>
        </>
    );
  }
  