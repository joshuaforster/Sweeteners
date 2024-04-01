import React from 'react'

export default function LayoutSection({children}){

    return (
        <section className="py-4 px-4 md:px-12 lg:px-24 mx-auto max-w-screen-xl" >
            {children}
        </section>
    )
}