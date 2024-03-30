import React from 'react'
import {sweeteners} from '../Data/data.js'
import {Link} from 'react-router-dom'

export default function Sweeteners(){

    const sweetenersArray = sweeteners.map(sweetener =>(
        <div key={sweetener.id}>
            <Link to={`/header/${sweetener.id}`}><h1>{sweetener.name}</h1></Link>
        </div>
        
    ))

    return(
        <div>
            <h1>Sweeteners</h1>
            <p>Debunking myths about sweeteners</p>
            {sweetenersArray}
        </div>
    )
}