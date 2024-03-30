import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import  {newParams}  from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function Benefits() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <div>
            {sweetener ? <h1>{sweetener.mythsVsFacts.myth}</h1> : <p>Sweetener not found.</p>}
            {sweetener ? <h1>{sweetener.mythsVsFacts.fact}</h1> : <p>Sweetener not found.</p>}
        </div>
    );
}
