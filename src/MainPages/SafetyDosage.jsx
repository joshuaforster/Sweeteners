import React from 'react';
import { useParams } from 'react-router-dom';
import { sweeteners } from '../Data/data.js';
import { newParams } from '../CustomComponents/useparams.jsx'; // Update the import path as necessary
import SliderSizes from '../CustomComponents/slider.jsx';


export default function SafetyDosage() {
    const { id } = useParams();
    const sweetener = newParams(sweeteners, id);
   const [weight, setWeight] = React.useState(70); // Default weight to 70kg

    const handleSliderChange = (event, newValue) => {
        setWeight(newValue);
    };

    // Calculate the safe dosage based on weight
    const safeDosageForWeight = sweetener ? sweetener.safeDosage.amount * weight : 0;

    return (
        <div className="flex flex-col items-center min-h-screen p-4">
            {sweetener ? (
                <>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-4">{sweetener.name} - Safe Dosage</h1>
                        <p className="text-md md:text-lg text-gray-700">
                            Based on your weight, you can safely consume up to {safeDosageForWeight} mg of {sweetener.name} per day.
                        </p>
                    </div>
                    <SliderSizes
                        defaultValue={70}
                        min={40}
                        max={120}
                        onChange={handleSliderChange}
                    />
                </>
            ) : (
                <p className="text-xl text-red-500">
                    Sweetener not found.
                </p>
            )}
        </div>
    );
}