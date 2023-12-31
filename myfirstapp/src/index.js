import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firstcomponent from './composant/Firstcomponent';
import Bouclecomponent from './composant/Bouclecomponent'
import Conditioncomponent from './composant/Conditioncomponent';
import FormulaireComponant from './composant/FormulaireComponant';
import ParentComponent from './composant/ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*< Firstcomponent couleur={'#ff0000'} />
     <App/> 
    <Conditioncomponent/>
    <Bouclecomponent/>
    <ParentComponent/>*/}
    <FormulaireComponant/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
