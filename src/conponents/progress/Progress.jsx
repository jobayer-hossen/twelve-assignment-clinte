import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from '../../../public/loading/54906-loading-animation-bored-hand.json'
const Progress = () => {
    return (
        <div className='w-[35%] mx-auto'>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    );
};

export default Progress;