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

    const nom = "Hugo";

    // Exercice 29 Début
    // 1
    const login = "VotreLogin";
    const password = "VotreMotDePasse";

    // 2
    const userData = {
        login: "VotreLogin",
        motDePasse: "VotreMotDePasse"
    };
    // Exercice 29 Fin


    return (
        <div style={{ textAlign: 'center' }}>
            <br></br>
            <div onMouseOver={changeColor} style={{ color }}>
                <span style={{ fontSize: '30px' }} >Je suis un composant de {nom}</span>
            </div><br></br><hr></hr>


            {/* Exercice 29 Début */}
            <h1>Exercice 29-1 :</h1>
            <div>
                <div>
                    <p>Login: {login}</p>
                    <p>Mot de passe: {password}</p>
                </div>
            </div><br></br><hr></hr>


            <h1>Exercice 29-2 :</h1>
            <div>
                <div>
                    <p>Login: {userData.login}</p>
                    <p>Mot de passe: {userData.motDePasse}</p>
                </div>
            </div><br></br><hr></hr>
            {/* Exercice 29 Fin */}

        </div>

    );
};

export default FirstComponent;
