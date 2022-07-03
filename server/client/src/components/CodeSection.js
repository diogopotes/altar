import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

import './CodeSection.css'

const CodeSection = () => {


    return (
        <div className='container code-section'>
            <div className='live-section'>
            <FaDotCircle color='red' />
            <h6>LIVE</h6>
            </div>
            <div className='code'>
                <h4>Your Code :</h4>
                <h4 className='number'><strong>11</strong></h4>
            </div>
        </div>
    )

}

export default CodeSection;