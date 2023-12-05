import React, { useState } from 'react';

const Conditioncomponent = ({ couleur }) => {

    const testCondition = true;
    return (
        <div style={{ textAlign: 'center' }}>
            <div>
                <h1>Exercice 30-1 :</h1>
                {testCondition ? (<p>Condition true</p>) : (<p>Condition false</p>)}
            </div><br></br><hr></hr>
        </div>

    );
};

export default Conditioncomponent;
