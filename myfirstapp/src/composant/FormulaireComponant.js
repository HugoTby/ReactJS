import React, { useState } from 'react';
import FormulaireEnfantComponent from './FormulaireEnfantComponent';
import FormulaireEnfant2Component from './FormulaireEnfant2Component';

const FormulaireComponant = ({ couleur }) => {
    const [login, setLogin] = useState('');
    const [motDePasse, setMotDePasse] = useState('');
    const [message, setMessage] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
    };

    const handleMotDePasseChange = (event) => {
        setMotDePasse(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validation = validerConnexion(login, motDePasse);

        setMessage(validation ? 'Connexion réussie!' : 'Login ou mot de passe incorrect.');
    };


    const validerConnexion = (login, motDePasse) => {
        const loginValide = 'login';
        const motDePasseValide = 'password';
        return login === loginValide && motDePasse === motDePasseValide;
    };

    const [title, setTitle] = useState("Ceci est un formulaire");

    const handleTitleChange = (newTitle) => {
        setTitle(newTitle);
    };

    return (
        <div style={{ textAlign: 'center', maxWidth: '300px', margin: 'auto', paddingTop: '50px', fontFamily: 'Arial, sans-serif' }}>
            <h1 style={{ color: couleur }}>{title}</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Login:</label>
                    <input type="text" value={login} onChange={handleLoginChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        placeholder="Entrez votre login"
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Mot de passe:</label>
                    <input type="password" value={motDePasse} onChange={handleMotDePasseChange} style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #ccc' }}
                        placeholder="Entrez votre mot de passe"
                    />
                </div>
                <div>
                    <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Se connecter
                    </button>
                </div>
            </form>
            <p style={{ marginTop: '20px', color: message === 'Connexion réussie!' ? 'green' : 'red' }}>
                {message}
            </p>
            <FormulaireEnfantComponent connexionReussie={message === 'Connexion réussie!'} />
            <FormulaireEnfant2Component onTitleChange={handleTitleChange} />
        </div>
    );

};

export default FormulaireComponant;
