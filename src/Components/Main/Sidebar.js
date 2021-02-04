import React from 'react'
import {straightFromSource,sarcastic,hearHim,coronavirus, computers, useBrain, relatable, TIL, math, python, science, chemistry, DiscoverSpaces} from '../../assets'

function Sidebar() {
    return (
        <ul className="sidebar">
            <li><img src={straightFromSource} alt="Source"/> Straight From the Source</li>
            <li><img src={hearHim} alt="hear"/> Hear Him!</li>
            <li><img src={sarcastic} alt="sarcastic"/> Sarcastic</li>
            <li><img src={coronavirus} alt="coronavirus"/> Coronavirus</li>
            <li><img src={computers} alt="cs"/> Computer Science Studies</li>
            <li><img src={useBrain} alt="brain"/> How To Use The Brain</li>
            <li><img src={relatable} alt="relatable"/> Why So Relatable?</li>
            <li><img src={TIL} alt="til"/> TIL</li>
            <li><img src={math} alt="math"/> Mathematics and Physics</li>
            <li><img src={python} alt="python"/> Python Learners</li>
            <li><img src={science} alt="science"/> Science</li>
            <li><img src={chemistry} alt="chemistry"/> Bachelor of Science in Chemistry</li>
            <li><DiscoverSpaces/> Discover Spaces</li>
        </ul>
    )
}

export default Sidebar
