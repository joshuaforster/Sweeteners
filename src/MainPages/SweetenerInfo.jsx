import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx';
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function SweetenerInfo() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);

    return (
        <LayoutSection>
            <div className="lg:flex min-h-screen">
                {/* Main content */}
                <div className="flex-col flex-1">
                    {sweetener ? (
                        <>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-indigo-600 mb-4">
                                    {sweetener.type}
                                </h1>
                                <p className="md:text-lg text-gray-700 dark:text-white" >
                                    Explore the various aspects and benefits of this sweetener.
                                </p>
                            </div>
                            <div>
                                {sweetener.overview && (
                                    <section className="mb-4">
                                        <h2 className="text-2xl font-semibold">General Info</h2>
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

                {/* Sidebar */}
                <Sidebar />
            </div>
        </LayoutSection>
    );
}
