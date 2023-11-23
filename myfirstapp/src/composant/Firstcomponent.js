import React, { useState } from 'react';

const Firstcomponent = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const changeColor = () => {
        const newColor = color === 'red' ? 'blue' : 'red';
        setColor(newColor);
    };

    return (
        <div>
            <div style={{color}} >
                Je suis un composant
            </div>
            <button onClick={changeColor}>Changer la couleur</button>
        </div>
    );
};

export default Firstcomponent;