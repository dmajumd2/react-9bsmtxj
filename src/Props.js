import React, { useCallback, useEffect, useState } from 'react';

// function Child({increment}){
//     return <button onClick={increment}>+</button>
// }

// export default function Props() {
//     const [count, setCount] = useState(0);
//     const increment = () => setCount(count + 1);
//     return (
//         <>
//             <p>{count}</p>
//             <Child increment={increment} />
//         </>
//     );
//   }
  

//   function Child({value}){
//     return <h1>{value}</h1>
//   }

//   export default function(){
//     const [count, setCount] = useState(0);

//     return(
//         <>
//         <Child value = {count}/>
//         <button onClick={() => setCount(count+1)}>+</button>
//         </>
//     )
//   }

// export default function Prop(){


//     // const [count, setCount] = useState(0);

//     // return (
//     //     <>
//     //         <h1>{count}</h1>
//     //         <button onClick={() => setCount(count+1)}>+</button>
//     //     </>
//     // )

//     // const [data, setData] = useState("");

//     // return (
//     //     <>
//     //         <h1>Input is</h1>
//     //         <input
//     //             type='text'
//     //             value={data}
//     //             onChange={(e)=>setData(e.target.value)}
//     //         />
//     //         <h1>{data}</h1>
//     //     </>
//     // )

//     const [user, setUser] = useState(['a', 'b', 'c', 'd']);

//     const removeItem = (item) => {
//             setUser(user.filter(i => i !== item))

//             //setItems(items.filter(i => i !== item));
//     }

//     return (
//         <>
//             {/* <h1>List</h1>
//             <ul>
//                 {user.map((u, i) => (
//                     <div>
//                     <li key={i}>{u}<button onClick={() => removeItem(i)}>X</button></li> 
//                     </div>
//                 ))}
//             </ul> */}

//             <ul>
//         {user.map(i => (
//           <li key={i}>
//             {i}
//             <button onClick={() => removeItem(i)}>X</button>
//           </li>
//         ))}
//       </ul>
            
//         </>
//     )
//}

export default function Props(){
    const [timer, setTimer] = useState(300);
    const [started, isStarted] = useState(false);

useEffect(() => {
    let intervalId;
    if(started && timer>0){
        intervalId = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)
    }
return () => clearInterval(intervalId);
}, [timer, started])

    function startTimer(){
            isStarted(true);
    }

    const minutes = Math.floor(timer/60);
    const seconds = timer % 60;
return (
    <>
    <h1>Timer Count down: {timer} {minutes} {seconds}</h1>
    <button onClick={startTimer}>Start</button>
    </>
)
}