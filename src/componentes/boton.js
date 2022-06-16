import React from 'react';
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