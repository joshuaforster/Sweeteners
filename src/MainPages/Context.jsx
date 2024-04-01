import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <LayoutSection>
            <div className="flex min-h-screen">
                {sweetener ? (
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Context</h1>
                        <p className="text-md md:text-lg text-gray-700">
                            {sweetener.comparisonWithNaturalFoods.text}
                        </p>
                    </div>
                ) : (
                    <p className="text-xl text-red-500">
                        Sweetener not found.
                    </p>
                )}
                <Sidebar/>
            </div>
            
        </LayoutSection>
    );
}
