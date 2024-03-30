import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import  {newParams}  from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function Studies() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    const studies = sweetener.studiesAndReferences.map(study =>(
        <div key={sweetener.id}>
            <p>{study.title}</p>
            <p>{study.link}</p>
            <p>{study.text}</p>
        </div>
    ))
  
    return (
        <div>
            {studies}
        </div>
    );
}
