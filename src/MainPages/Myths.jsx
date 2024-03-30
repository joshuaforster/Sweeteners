import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function Benefits() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <div className="flex flex-col items-center min-h-screen p-4 space-y-6">
            {sweetener ? (
                <>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Myths vs Facts</h1>
                        <h1 className="text-2xl md:text-3xl font-bold text-red-500 mb-4">Myth</h1>
                        <p className="text-md md:text-lg text-gray-700">{sweetener.mythsVsFacts.myth}</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">Fact</h1>
                        <p className="text-md md:text-lg text-gray-700">{sweetener.mythsVsFacts.fact}</p>
                    </div>
                </>
            ) : (
                <p className="text-xl text-red-500">Sweetener not found.</p>
            )}
        </div>
    );
}

