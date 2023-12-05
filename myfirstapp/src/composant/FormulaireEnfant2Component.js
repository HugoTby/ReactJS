import React, { useState } from 'react';

const FormulaireEnfant2Component = ({ onTitleChange }) => {
    const [darkMode, setDarkMode] = useState(false);

    const handleToggle = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        onTitleChange(newMode ? "Le formulaire est en mode sombre !" : "Le formulaire est en mode clair !");
        document.body.style.backgroundColor = newMode ? 'black' : 'white';
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <button
                style={{
                    padding: '10px 15px',
                    backgroundColor: darkMode ? '#007bff' : '#6c757d',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}
                onClick={handleToggle}
            >
                {darkMode ? 'Désactiver' : 'Activer'} le mode sombre
            </button>
        </div>
    );
};

export default FormulaireEnfant2Component;
