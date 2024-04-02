import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function Approval() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    const approval = sweetener.approvalByGoverningBodies.details.map((body, index) => (
        <div key={index} className="mb-6 p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">{body.name} ({body.country})</h2>
            <a href={body.link} className="text-blue-500 hover:text-blue-700 underline">See more</a>
        </div>
    ));
  
    return (
        <LayoutSection>
            <h1>{sweetener.approvalByGoverningBodies.text}</h1>
            <div className="min-h-screen flex space-y-6">
                <div className='flex flex-1 flex-col'>
                    {approval.length > 0 ? approval : <p className="text-lg text-red-500">No studies found.</p>}
                </div>
                <Sidebar />
            </div>
        </LayoutSection>
    );
}
