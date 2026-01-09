import React, { useState, useEffect } from 'react';

export default function Removeitemlist() {
    const [items, setItems] = useState(["A", "B", "C"]);
  
    const removeItem = (item) => {
      setItems(items.filter(i => i !== item));
    };
  
    return (
      <ul>
        {items.map(i => (
          <li key={i}>
            {i}
            <button onClick={() => removeItem(i)}>X</button>
          </li>
        ))}
      </ul>
    );
  }
  