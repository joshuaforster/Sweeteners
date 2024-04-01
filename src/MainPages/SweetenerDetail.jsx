import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';

export default function SweetenersDetail() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
  
    return (
        <LayoutSection>
            <div className="flex min-h-screen">
                <div className='flex flex-col'>
                {sweetener ? (
                    <>
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">
                            {sweetener.name} - {sweetener.type}
                        </h1>
                        <div className="text-left max-w-4xl">
                            {sweetener.overview && (
                                <section className="mb-4">
                                    <h2 className="text-2xl font-semibold">Overview</h2>
                                    <p>{sweetener.overview.generalInfo}</p>
                                    <p>{sweetener.overview.history}</p>
                                    <p>{sweetener.overview.notablePoints}</p>
                                </section>
                            )}
                            {sweetener.generalSafety && (
                                <section className="mb-4">
                                    <h2 className="text-2xl font-semibold">Safety</h2>
                                    <p>{sweetener.generalSafety}</p>
                                    {sweetener.safeDosage && <p>ADI: {sweetener.safeDosage.text}</p>}
                                </section>
                            )}
                            {sweetener.benefitsComparedToSugar && sweetener.benefitsComparedToSugar.list && (
                                <section className="mb-4">
                                    <h2 className="text-2xl font-semibold">Benefits</h2>
                                    <ul>
                                        {sweetener.benefitsComparedToSugar.list.map((benefit, index) => (
                                            <li key={index}>- {benefit}</li>
                                        ))}
                                    </ul>
                                    <p>{sweetener.benefitsComparedToSugar.text}</p>
                                </section>
                            )}
                            {sweetener.primaryUses && (
                                <section className="mb-4">
                                    <h2 className="text-2xl font-semibold">Primary Uses</h2>
                                    <p>{sweetener.primaryUses}</p>
                                </section>
                            )}
                        </div>
                    </>
                ) : (
                    <p className="text-xl text-red-500">
                        Sweetener not found.
                    </p>
                )}
                </div>
                <Sidebar />
            </div>
        </LayoutSection>
    );
}
