import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function FetchAPI() {

    const[users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        // .then((res)=>res.json())
        .then((data)=>{
            setUsers(data.data)
        })
    },[])

    return (
        <>
           <h2>Data is available</h2>
           <ul>
            {users.map((u)=>(
                <li key={u.id}>{u.name}</li>
            ))}
           </ul>
        </>
    )
}