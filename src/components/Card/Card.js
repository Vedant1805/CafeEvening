// Card.jsx
import React from 'react';

export function Card({ itemDetails }) {
    const { name, price } = itemDetails;

    const cardStyle = {
      display: 'flex',
      justifyContent: 'space-between',
        padding: '20px',
        width: '100%',
        margin: '10px',
        color: 'white',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        marginBottom: '-50px',
    };

   

    return (
      
        <div style={cardStyle}>
          
            <p>{name}</p>
            <p>{price}</p>
        </div>
        
    );
}
