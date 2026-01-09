import React, { useState, useEffect } from 'react';

export default function Color() {
    
    const [colors] = React.useState(["red", "blue", "green", "orange"]);

    return (
        <div style={{display: "flex", gap:10}}>
            {colors.map((c, i) => (
                <div    
                    key={i}
                    style={{width:50, height: 50,background: c}}
                />
            ))}
        </div>
    )
}