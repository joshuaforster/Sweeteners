import React from 'react'

export default function Sidebar(){
    return(
        <div className="hidden  lg:block lg:w-1/3 h-full sticky top-16 p-8 text-center shadow-xl bg-white ml-24"> {/* Adjust top-16 to match your navbar's height */}
            <h2 className="font-bold text-xl mb-4">Sidebar Content</h2>
            <p>Useful information or links.</p>
        </div>  
    )
}
