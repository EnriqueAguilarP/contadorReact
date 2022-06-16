import React from 'react';
import '../styleSheets/contador.css'
function Contador( { numClick } ){

    return(
        <div className='contador'>
            { numClick }
        </div>
    );
}

export default Contador;