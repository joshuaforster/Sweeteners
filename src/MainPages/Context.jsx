import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx';
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    // Generate a single list of components
    const sweetenerComponents = (
        <ul className="list-disc pl-5">
            {sweetener.breakdownComponents.map((component, index) => (
                <li key={index} className="mt-1">{component}</li>
            ))}
        </ul>
    );

    // Function to dynamically render comparisons
    function renderComparisons(){
        return Object.entries(sweetener.comparisons).map(([component, details]) => (
            <div key={component} className="mt-4">
                <h2 className="text-xl font-bold text-indigo-700">{component}</h2>
                {Object.entries(details).map(([item, itemDetails]) => (
                    <div key={item} className="mt-2 ml-4">
                        <h3 className="text-lg font-semibold">{item}</h3>
                        <p className="text-gray-600">{itemDetails.comparisonTextPerServing}</p>
                        <p className="text-gray-600">Content per 100g/ml: {itemDetails.contentPer100g || itemDetails.contentPer100ml} mg</p>
                        <p className="text-gray-600">Average Serving Size: {itemDetails.averageServingSize}</p>
                        <p className="text-gray-600">Content per Serving: {itemDetails.contentPerServing} mg</p>
                    </div>
                ))}
            </div>
        ));
    };

    return (
        <LayoutSection>
            <div className="flex justify-between min-h-screen p-5 bg-gray-100">
                <div className='flex-1'>
                    <p className="text-2xl font-bold text-indigo-800 mb-4">What is {sweetener.name} broken down into?</p>
                    {sweetenerComponents}
                    <div className="mt-6">
                        {renderComparisons()}
                    </div>
                </div>
                <Sidebar className="w-1/4"/>
            </div>            
        </LayoutSection>
    );
}
