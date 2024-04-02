import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function Studies() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    const studies = sweetener.studiesAndReferences.map((study, index) => (
        <div key={index} className="mb-6 p-6 shadow-lg rounded-lg bg-white">
            <h2 className="text-lg font-semibold text-indigo-600 mb-2">{study.title}</h2>
            <a href={study.link} className="text-blue-500 hover:text-blue-700 underline">Study Link</a>
            <p className="text-gray-800 mt-2">{study.text}</p>
        </div>
    ));
  
    return (
        <LayoutSection>
            <div className="min-h-screen flex space-y-6">
                <div className='flex flex-1 flex-col'>
                    {studies.length > 0 ? studies : <p className="text-lg text-red-500">No studies found.</p>}
                </div>
                <Sidebar />
            </div>
        </LayoutSection>
    );
}
