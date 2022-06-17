import React from 'react';
import princesa from '../assets/miPrincesa.jpg'

const LoveLoader = () => {
    
    return (
        <div className='overlay'>
          
             <div className='esposa'>
            <h2>Mi esposa es la esposa mas hermosa del mundo</h2>
            <img src={princesa}/>
            <h1>Te amo mucho mi reina</h1>
            </div>   
        
        </div>
    );
};

export default LoveLoader;