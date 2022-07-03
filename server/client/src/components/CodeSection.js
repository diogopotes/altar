import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

import './CodeSection.css'

import { useSelector } from 'react-redux';

const CodeSection = () => {

    const { code } = useSelector((state) => state.code);

    return (
        <div className='code-section'>
            <div className='live-section'>
            <FaDotCircle color='red' />
            <h6>LIVE</h6>
            </div>
            <div className='code'>
                <h4>Your Code :</h4>
                <h4 className='number'><strong>{code && code.code}</strong></h4>
            </div>
        </div>
    )

}

export default CodeSection;