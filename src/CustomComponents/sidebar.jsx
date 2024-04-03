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
        <div className="hidden lg:block lg:w-1/3 h-full sticky top-16 p-8 text-center shadow-xl bg-white ml-24">
            <h2 className="font-bold text-xl mb-4">{sweetener?.name}</h2>
            <p>Useful information or links.</p>
            <div className="flex justify-between mt-4">
                <button 
                  onClick={() => goToSweetener(currentIndex - 1)}
                  className="py-2 px-4 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Previous
                </button>
                <button 
                  onClick={() => goToSweetener(currentIndex + 1)}
                  className="py-2 px-4 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Next
                </button>
            </div>
        </div>  
    );
}


// import React from 'react'
// import { sweeteners } from '../Data/data.js';
// import { newParams } from '../CustomComponents/useparams.jsx';
// import { useParams } from 'react-router-dom';

// export default function Sidebar(){

//     const { id } = useParams();
//     const sweetener = newParams(sweeteners, id);

//     return(
//         <div className="hidden  lg:block lg:w-1/3 h-full sticky top-16 p-8 text-center shadow-xl bg-white ml-24"> {/* Adjust top-16 to match your navbar's height */}
//             <h2 className="font-bold text-xl mb-4">{sweetener.name}</h2>
//             <p>Useful information or links.</p>
//         </div>  
//     )
// }
