import React, { useState } from 'react';

const Bouclecomponent = ({ couleur }) => {

    const testBoucle = [1, 2, 3, 4, 5];
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>Exercice 30-2 :</h1>
                <ul>
                    {testBoucle.map(nombre => (
                        <li style={{ listStyle: 'none' }} key={nombre}>{nombre}</li>
                    ))}
                </ul>
            </div><br></br><hr></hr>
        </div>

    );
};

export default Bouclecomponent;
