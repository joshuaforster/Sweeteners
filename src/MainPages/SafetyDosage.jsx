import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import SliderSizes from '../CustomComponents/slider.jsx';


export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
    console.log(sweetener.safeDosage.amount)
  
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            {sweetener ? (
                <>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Safe Dosage</h1>
                        {sweetener.safeDosage ? (
                            <p className="text-md md:text-lg text-gray-700">
                                {sweetener.safeDosage.text}
                            </p>
                        ) : (
                            <p className="text-md md:text-lg text-gray-700">
                                No safe dosage information available.
                            </p>
                        )}
                    </div>
                    {/* Conditionally render SliderSizes if there is specific data it needs to use */}
                    {sweetener.safeDosage && (
                        <SliderSizes value={sweetener.safeDosage.amount} />
                    )}
                </>
            ) : (
                <p className="text-xl text-red-500">
                    Sweetener not found.
                </p>
            )}
        </div>
    );
}
