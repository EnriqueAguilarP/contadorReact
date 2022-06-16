import React from 'react';
import '../styleSheets/boton.css'

function Boton({texto, esBotonContador, manejarClick}){
    return(
        <button 
        className= { esBotonContador ? 'boton-contador' : 'boton-reiniciar' }
        onClick={manejarClick}
        >
            {texto}
        </button>
    );
}

export default Boton;