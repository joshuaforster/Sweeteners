import React from 'react';
import {sweeteners} from '../Data/data.js';
import {Link} from 'react-router-dom';

export default function Sweeteners() {
    const sweetenersArray = sweeteners.map(sweetener => (
        <div key={sweetener.id} className="border border-blue-200 shadow-sm hover:shadow-md transition-shadow duration-300 p-4 rounded-lg m-3 flex flex-col items-center">
            <Link to={`/header/${sweetener.id}`} className="text-lg text-blue-600 hover:text-blue-800 font-semibold">
                {sweetener.name}
            </Link>
        </div>
    ));

    return (
        <div className="p-4">
            <div className="text-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Sweeteners</h1>
                <p className="text-md md:text-lg text-gray-700">Exploring the world of sweeteners can be fascinating. This guide aims to debunk common myths and provide factual information on various sweeteners. Whether you're interested in health benefits, dietary choices, or culinary uses, here's where you can start your journey.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sweetenersArray}
            </div>
        </div>
    );
}
