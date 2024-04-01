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
        <section className="py-4 px-4 md:px-12 lg:px-24 mx-auto max-w-screen-xl">
            <div className="bg-white dark:bg-gray-900">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Explore the World of Sweeteners
                        </h1>
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Discover the benefits, safety, and types of sweeteners. Ideal for anyone looking to learn about healthy sugar alternatives.
                        </p>
                        <div>
                            <Link to="/discover" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 mr-2">
                                Discover Sweeteners
                                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg text-blue-700 border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-200 dark:text-white dark:border-blue-700 dark:hover:bg-blue-800 dark:focus:ring-blue-500">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:mt-0 lg:col-span-5 lg:flex">
                        <img src="/Untitled_Artwork 369.png" alt="Informative display about sweeteners" />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Discover Sweeteners</h1>
                    <p className="text-md md:text-lg text-gray-700">Exploring the world of sweeteners can be fascinating. This guide aims to debunk common myths and provide factual information on various sweeteners. Whether you're interested in health benefits, dietary choices, or culinary uses, here's where you can start your journey.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sweetenersArray}
                </div>
            </div>
        </section>
    );
}
