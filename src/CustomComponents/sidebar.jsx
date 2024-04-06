import React from 'react';
import { sweeteners } from '../Data/data.js';
import { useParams, useNavigate } from 'react-router-dom';

export default function Sidebar() {
    const navigate = useNavigate();
    const { id } = useParams();
    const sweetener = sweeteners.find(s => s.id.toString() === id);
    const currentIndex = sweeteners.indexOf(sweetener);
    
    function goToSweetener(index){
        const targetIndex = (index + sweeteners.length) % sweeteners.length; // Loop around the array
        const targetSweetener = sweeteners[targetIndex];
        navigate(`/header/${targetSweetener.id}`); // Navigate to the base detail page of the next/previous sweetener
    };

    return(
      <div className="hidden lg:block lg:w-1/3 h-full sticky top-16 p-8 text-center shadow-xl bg-white dark:bg-gray-900 ml-24">
          <h2 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">{sweetener?.name}</h2>
          <p className="text-gray-900 dark:text-gray-300">Useful information or links.</p>
          <div className="flex justify-between mt-4">
              <button 
                onClick={() => goToSweetener(currentIndex - 1)}
                className="py-2 px-4 rounded bg-gray-200  dark:text-white hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Previous
              </button>
              <button 
                onClick={() => goToSweetener(currentIndex + 1)}
                className="py-2 px-4 rounded bg-gray-200  dark:text-white  hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                Next
              </button>
          </div>
      </div>  
  );
  
}


// Learn and make a blog post explaining understanding 