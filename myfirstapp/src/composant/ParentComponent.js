import React from "react";
import EnfantComponent from './EnfantComponent';

function ParentComponent() {

    const dataFromParent = "Données du parent";
    return(
        <div>
            <h1>Composant Parent</h1>
            <EnfantComponent data={dataFromParent}/>
        </div>
    );
}

export default ParentComponent;