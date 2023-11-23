import React, { useState } from 'react';

const FirstComponent = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    const getRandomColor = () => {
        // Générer une couleur hexadécimale aléatoire
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };

    const changeColor = () => {
        const newColor = getRandomColor();
        setColor(newColor);
    };

    return (
        <div style={{textAlign: 'center', paddingTop: '25%'}}>
            <div onMouseOver={changeColor} style={{ color }}>
                <span style={{fontSize: '30px'}} >Je suis un composant</span>
            </div>
        </div>
    );
};

export default FirstComponent;
