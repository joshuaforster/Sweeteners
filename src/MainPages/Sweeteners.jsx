import React from 'react';
import { sweeteners } from '../Data/data.js';
import { Link, useSearchParams } from 'react-router-dom';
import LayoutSection from '../CustomComponents/layoutSection.jsx';

export default function Sweeteners() {
    const [searchParams] = useSearchParams();
    const typeFilter = searchParams.get('type');

    const filteredSweetener = typeFilter
        ? sweeteners.filter(sweetener => sweetener.type.toLowerCase() === typeFilter.toLowerCase())
        : sweeteners;

    const sweetenersArray = filteredSweetener.map(sweetener => (
        <div key={sweetener.id} className="border border-blue-200 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 rounded-xl m-4 flex flex-col items-center justify-center">
            <Link to={`/header/${sweetener.id}`} className="text-l md:text-xl text-center text-blue-700 hover:text-blue-900 dark:text-white dark:hover:text-gray-300 font-bold">
                {sweetener.name}
            </Link>
        </div>
    ));

    const FilterLink = ({ children, to, filterValue }) => {
        const isActive = typeFilter?.toLowerCase() === filterValue.toLowerCase();
        return (
            <Link
                to={to}
                className={`inline-block px-6 py-3 text-lg font-medium rounded-md transition-colors duration-300 ${
                    isActive
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "text-blue-700 hover:bg-blue-100 dark:text-white dark:hover:bg-gray-700"
                }`}
            >
                {children}
            </Link>
        );
    };

    return (
        <LayoutSection>
                <div className="grid max-w-screen-xl py-8 mx-auto lg:gap-8 xl:gap-12 lg:py-12 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl xl:text-7xl dark:text-white">
                            Explore the World of Sweeteners
                        </h1>
                        <p className="max-w-2xl mb-8 font-normal text-gray-600 lg:mb-10 md:text-xl lg:text-2xl dark:text-white">
                            Discover the benefits, safety, and types of sweeteners. Ideal for anyone looking to learn about healthy sugar alternatives.
                        </p>
                        <div className="flex space-x-4 ">
                            <Link to="/discover" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800">
                                Discover Sweeteners
                                <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-center text-blue-700 border border-blue-700 rounded-md hover:text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 dark:text-white dark:border-blue-600 dark:hover:bg-blue-700">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:mt-0 lg:col-span-5 lg:flex">
                        <img src="/Untitled_Artwork 369.png" alt="Informative display about sweeteners" className="w-full h-full object-cover object-center rounded-lg" />
                    </div>
                </div>
            
                <div className="flex flex-col md:flex-row items-center justify-center py-8 px-4 mx-auto max-w-screen-xl lg:px-6">
                    <div className="mt-4 md:mt-0 flex-1">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Understanding Sweeteners</h2>
                        <p className="mb-6 font-light text-gray-500 md:text-lg  dark:text-white">In a world quick to judge and slow to research, our app cuts through the noise to deliver facts about sweeteners. It's not about being pro or anti-sweetener; it's about empowering you to make informed decisions. Every food component, at its core, is chemical, and simplifying them as merely 'good' or 'bad' does a disservice to us all. Whether you're sipping on a diet soda or a regular one, you deserve to know the facts, not fear. Here's to making choices based on knowledge, not hearsay.</p>
                        <a href="#" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
                            Discover the Truth
                            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </a>
                    </div>
                    <div className="flex-1 flex justify-center md:justify-end md:pr-10 lg:pr-16">
                    <img className="w-4/5 max-w-none dark:hidden" src="/canderel.png" alt="dashboard image" style={{ maxWidth: '80%' }} />
                    <img className="w-4/5 max-w-none hidden dark:block" src="/canderel.png" alt="dashboard image" style={{ maxWidth: '80%' }} />
                    </div>
                </div>
    
            <section className="text-center mb-10">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Discover Sweeteners</h2>
                <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-white">Exploring the world of sweeteners can be fascinating. This guide aims to debunk common myths and provide factual information on various sweeteners. Whether you're interested in health benefits, dietary choices, or culinary uses, here's where you can start your journey.</p>
            </section>

                <div className="mt-8">
                    <p className="text-center text-2xl font-bold text-gray-900 dark:text-white mb-6">Filter by Sweetener Type</p>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                        <FilterLink to="?type=artificial%20sweeteners" filterValue="artificial sweeteners">Artificial Sweeteners</FilterLink>
                        <FilterLink to="?type=natural%20sweeteners" filterValue="natural sweeteners">Natural Sweeteners</FilterLink>
                        <FilterLink to="?type=sugar%20alcohol" filterValue="sugar alcohol">Sugar Alcohol</FilterLink>
                        {typeFilter && <Link to="/" className="px-6 py-3 text-lg font-medium text-blue-700 bg-transparent border border-blue-700 rounded-md hover:bg-blue-700 hover:text-white transition-all duration-300">Clear</Link>}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sweetenersArray}
                </div>
      
        </LayoutSection>
    );
}

