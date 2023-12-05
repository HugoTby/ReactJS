import React from 'react';

const FormulaireEnfantComponent = ({ connexionReussie }) => {
    const couleur = connexionReussie ? 'green' : 'red';

    return (
        <div style={{
            marginTop: '20px',
            width: '20px',
            height: '20px',
            backgroundColor: couleur,
            borderRadius: '50%',
            margin: 'auto'
        }}></div>
    );
};

export default FormulaireEnfantComponent;
