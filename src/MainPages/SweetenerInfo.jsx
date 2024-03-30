import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary

export default function SweetenerInfo() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            {sweetener ? (
                <>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                            {sweetener.type}
                        </h1>
                        <p className="text-md md:text-lg text-gray-700">
                            Explore the various aspects and benefits of this sweetener.
                        </p>
                    </div>
                    <div className="text-left max-w-4xl">
                        {sweetener.overview && (
                            <section className="mb-4">
                                <h2 className="text-2xl font-semibold">General Info</h2>
                                {/* Assuming 'generalInfo' is a link to more detailed info */}
                                <Link to={sweetener.overview.generalInfoLink} className="text-blue-600 hover:text-blue-800 visited:text-purple-600">
                                    Learn more about {sweetener.name}
                                </Link>
                                <p>{sweetener.overview.history}</p>
                                <p>{sweetener.overview.notablePoints}</p>
                            </section>
                        )}
                        {/* Include other sections as required, following the pattern above */}
                    </div>
                </>
            ) : (
                <p className="text-xl text-red-500">
                    Sweetener not found.
                </p>
            )}
        </div>
    );
}