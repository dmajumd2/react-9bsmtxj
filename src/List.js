import React, { useState, useEffect } from 'react';

export default function List() {
    const users = ["Alice", "Bob", "Charlie"];
    const [counter, setCounter] = useState(0);
    return (
        <>
            <h1>List of Persons:</h1>

            <ul>
                {
                  users.map((user, index) => (
                  <li key={index}>{user}</li>
                  ))
                }
            </ul>

        </>
    )
}