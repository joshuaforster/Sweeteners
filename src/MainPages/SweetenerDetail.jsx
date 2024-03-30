import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function SweetenersDetail() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            {sweetener ? (
                <div className="text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                        {sweetener.name}
                    </h1>
                    <p className="text-md md:text-lg text-gray-700">
                        Discover the unique properties and benefits of {sweetener.name}.
                    </p>
                </div>
            ) : (
                <p className="text-xl text-red-500">
                    Sweetener not found.
                </p>
            )}
        </div>
    );
}
