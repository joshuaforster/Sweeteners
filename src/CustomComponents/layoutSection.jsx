import React from 'react'

export default function LayoutSection({children}){

    return (
        <section className="bg-white dark:bg-gray-800" >
            <div className='py-4 px-4 md:px-12 lg:px-24 w-full mx-auto max-w-screen-xl dark:text-white'>
                {children}
            </div>
        </section>
    )
}
