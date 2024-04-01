import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import SliderSizes from '../CustomComponents/slider.jsx';
import LayoutSection from '../CustomComponents/layoutSection.jsx';
import Sidebar from '../CustomComponents/sidebar.jsx';


export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
   const [weight, setWeight] = React.useState(70); // Default weight to 70kg

    const handleSliderChange = (event, newValue) => {
        setWeight(newValue);
    };


    // Calculate the safe dosage based on weight
    const safeDosageForWeight = sweetener ? sweetener.safeDosage.amount * weight : 0;

    // Ensure sweetener and its nested properties are defined before accessing them
    const foodItems = sweetener && sweetener.safeDosage && sweetener.safeDosage.productExample
        ? (safeDosageForWeight / sweetener.safeDosage.productExample.sweetenerAmountPerUnit).toFixed(0)
        : 0;


    return (
        <LayoutSection>
            <div className="flex min-h-screen">
                <div className="flex-1 flex flex-col space-y-6">
                    {sweetener ? (
                        <>
                            <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">{sweetener.name} - Safe Dosage</h1>
                            <p className="text-md md:text-lg text-gray-700">
                                Slide your weight (KG) to see how much {sweetener.name} you can consume per day.
                            </p>
                            <SliderSizes
                                defaultValue={70}
                                min={40}
                                max={150}
                                onChange={handleSliderChange}
                            />
                            <p className="text-md md:text-lg text-gray-700">You weigh {weight} Kg.</p>
                            <p className="text-md md:text-lg text-gray-700">
                                Based on your weight, you can safely consume up to {safeDosageForWeight} mg of {sweetener.name} per day.
                            </p>
                            <p className="text-md md:text-lg text-gray-700">
                                That is the equivalent of {foodItems} {sweetener.safeDosage.productExample.name}s per day.
                            </p>
                        </>
                    ) : (
                        <p className="text-xl text-red-500">Sweetener not found.</p>
                    )}
                </div>
                <Sidebar />
            </div>
    </LayoutSection>
    );
}