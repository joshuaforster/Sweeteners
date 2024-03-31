import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function Benefits() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <section>
            <div className="flex flex-col items-center min-h-screen p-4">
                    {sweetener ? (
                        <>
                            <div className="text-center">
                                <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">Benefits</h1>
                                <p className="text-md md:text-lg text-gray-700">
                                    {sweetener.benefitsComparedToSugar.text}
                                </p>
                            </div>
                            {sweetener.benefitsComparedToSugar.list && sweetener.benefitsComparedToSugar.list.length > 0 && (
                                <ul className="list-disc text-left mx-auto max-w-4xl mt-4">
                                    {sweetener.benefitsComparedToSugar.list.map((benefit, index) => (
                                        <li key={index} className="text-md md:text-lg text-gray-700">
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </>
                    ) : (
                        <p className="text-xl text-red-500">
                            Sweetener not found.
                        </p>
                    )}
            </div>
        </section>
    );
}