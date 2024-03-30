import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import  {newParams}  from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import { sweeteners } from '../Data/data.js';

export default function SweetenerDetails() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);



    return (
        <div>
            <nav>
                <Link to={`/header/${id}`}>Overview</Link>
                <Link to={`/header/${id}/general-info`}>General Info</Link> | 
                <Link to={`/header/${id}/safety-dosage`}>Safety and Dosage</Link> | 
                <Link to={`/header/${id}/benefits-uses`}>Benefits and Uses</Link> |
                <Link to={`/header/${id}/myths-facts`}>Myths vs. Facts</Link> |
                <Link to={`/header/${id}/studies-references`}>Scientific Studies and References</Link> |
                <Link to={`/header/${id}/comparisons-context`}>Comparisons and Context</Link>
            </nav>
            <Link to='..'>Back to all sweeteners</Link>
            <h1>{sweetener.name}</h1>
            <Outlet />
        </div>
    );
}
