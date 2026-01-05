import React, { useState, useEffect } from 'react';
import './style.css';

// export default function app() {
//   //const counter= 0;
//   const [counter, setCounter] = useState(0);
  
//   return (
//     <>
//       <p>Counter is {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}> + </button>
//       <p></p>
//       <button onClick={() => setCounter(c => (c > 0 ? c - 1 : 0))}> - </button>
//     </>
//   );
// }

// export default function User() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   useEffect(() => {
//     //async function fetchUsers(){
//       fetch("https://jsonplaceholder.typicode.com/users")
//       .then(res => {
//         let v = res.json();
//         return v
//       })
//       .then((data) => {
//         setUsers(data)
//       })
//   },[])
//   return (
//    <>
//    <ul>
//      {users.map(u => (
//        <li key={u.id}>{u.name}</li>
//      ))}
//     </ul>
//    </>
//   );
// }

export default function form() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitData = (e) => {
      e.preventDefault();
      alert(username);
    }

  return(
    <>
     <form onSubmit={submitData}>

      <input
        type='text'
        value = {username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      {" "}
      <input
      type='text'
      value = {password}
      onChange={(e) => setPassword(e.target.value)}>
      </input>

      <input type='submit'/>
      <p>Current value: {username}</p>

     </form>
    </>
  )
}
