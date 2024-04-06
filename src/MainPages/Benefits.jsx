import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx';
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar'; // Ensure you have this Sidebar component created

export default function SweetenerInfo() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    return (
        <LayoutSection>
            <div className="flex min-h-screen">
                {/* Main content wrapper */}
                <div className="flex-1 flex flex-col">
                    {sweetener ? (
                        <>
                            <h1 className="text-3xl md:text-4xl  dark:text-white font-bold text-indigo-600 mb-4">Benefits</h1>
                            <p className="text-md md:text-lg  dark:text-white text-gray-700">
                                {sweetener.benefitsComparedToSugar.text}
                            </p>
                            
                            {sweetener.benefitsComparedToSugar.list && sweetener.benefitsComparedToSugar.list.length > 0 && (
                                <ul>
                                    {sweetener.benefitsComparedToSugar.list.map((benefit, index) => (
                                        <li key={index} className="text-md md:text-lg  dark:text-white text-gray-700">
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
                
                {/* Sidebar */}
                <Sidebar />
            </div>
        </LayoutSection>
    );
}
