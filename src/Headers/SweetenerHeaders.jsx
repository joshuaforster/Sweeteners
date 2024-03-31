import React from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import { sweeteners } from '../Data/data.js';

export default function SweetenerDetails() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    return (
        <div className="container mx-auto px-4">
            <nav className="flex overflow-x-auto py-4 space-x-4 whitespace-nowrap no-scrollbar">
                <Link to={`/header/${id}`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Overview</Link>
                <Link to={`/header/${id}/general-info`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">General Info</Link>
                <Link to={`/header/${id}/safety-dosage`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Safety and Dosage</Link>
                <Link to={`/header/${id}/benefits-uses`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Benefits and Uses</Link>
                <Link to={`/header/${id}/myths-facts`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Myths vs. Facts</Link>
                <Link to={`/header/${id}/studies-references`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Scientific Studies and References</Link>
                <Link to={`/header/${id}/comparisons-context`} className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out">Comparisons and Context</Link>
            </nav>

            <div className="my-4">
                <Link to='..' className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">← Back to all sweeteners</Link>
            </div>
            <h1 className="text-3xl font-semibold mb-4">{sweetener.name}</h1>
            <Outlet />
        </div>
    );
}

