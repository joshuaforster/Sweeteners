import React from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import { sweeteners } from '../Data/data.js';
import LayoutSection from '../CustomComponents/layoutSection.jsx';

export default function SweetenerDetails() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    // Function to dynamically set the class names based on the active state
    const getNavLinkClass = ({ isActive }) => isActive ? "border border-gray-300 shadow-sm px-4 py-2 text-white font-bold bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out" : "border border-gray-300 shadow-sm px-4 py-2 text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out";

    return (
        <section>
            <LayoutSection>
                <h1 className="text-3xl font-semibold mb-4">{sweetener.name}</h1>
                <nav className="flex overflow-x-auto py-4 space-x-4 whitespace-nowrap no-scrollbar">
                    <NavLink to={`/header/${id}`} className={getNavLinkClass} end>Overview</NavLink>
                    <NavLink to={`/header/${id}/general-info`} className={getNavLinkClass}>General Info</NavLink>
                    <NavLink to={`/header/${id}/safety-dosage`} className={getNavLinkClass}>Safety and Dosage</NavLink>
                    <NavLink to={`/header/${id}/benefits-uses`} className={getNavLinkClass}>Benefits and Uses</NavLink>
                    <NavLink to={`/header/${id}/myths-facts`} className={getNavLinkClass}>Myths vs. Facts</NavLink>
                    <NavLink to={`/header/${id}/approval`} className={getNavLinkClass}>Approving Bodies</NavLink>
                    <NavLink to={`/header/${id}/studies-references`} className={getNavLinkClass}>Scientific Studies and References</NavLink>
                    <NavLink to={`/header/${id}/comparisons-context`} className={getNavLinkClass}>Comparisons and Context</NavLink>
                </nav>

                <div className="my-4">
                    <NavLink to='..' className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out">← Back to all sweeteners</NavLink>
                </div>
            </LayoutSection>
            <Outlet />
        </section>
    );
}
