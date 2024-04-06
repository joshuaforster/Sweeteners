import React from 'react';
import { useParams } from 'react-router-dom';
import { newParams } from '../CustomComponents/useparams.jsx';
import { sweeteners } from '../Data/data.js';
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    const sweetenerComponents = (
        <ul className="list-disc pl-5">
            {sweetener.breakdownComponents.map((component, index) => (
                <li key={index} className="mt-1">{component}</li>
            ))}
        </ul>
    );

    function renderComparisons(){
        return Object.entries(sweetener.comparisons).map(([item, itemDetails]) => (
            <div key={item} className="mt-4">
                <h2 className="text-xl  dark:text-white font-bold text-indigo-700">{item}</h2>
                <div className="mt-2 ml-4">
                    <p className="text-gray-600  dark:text-white">{itemDetails.comparisonTextPerServing}</p>
                    <p className="text-gray-600  dark:text-white">Content per 100g/ml: {itemDetails.contentPer100g || itemDetails.contentPer100ml || 'N/A'} mg</p>
                    <p className="text-gray-600  dark:text-white">Average Serving Size: {itemDetails.averageServingSize}</p>
                    <p className="text-gray-600  dark:text-white">Content per Serving: {itemDetails.contentPerServing} mg</p>
                </div>
            </div>
        ));
    };

    return (
        <LayoutSection>
            <div className="flex justify-between min-h-screen p-5">
                <div className='flex-1'>
                    <p className="text-2xl font-bold text-indigo-800  dark:text-white mb-4">What is {sweetener.name} broken down into?</p>
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