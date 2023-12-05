import React from "react";

function EnfantComponent(props) {
    return(
        <div>
            <h1>Composant Enfant</h1>
            <p>Ceci est le composant enfant.</p>
            <p>Propriété du parent : {props.data}</p>
        </div>
    );
}

export default EnfantComponent;