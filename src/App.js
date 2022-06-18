import logo from './imagenes/logo.png';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';

function App() {

  //Hooks
  const [numClick, setNumClick] = useState(0); 

  //Funciones de botones

  const incrementarContador = () => {
    setNumClick(numClick + 1);
    
  }

  const reiniciarContador = () => {
    setNumClick(0);
  }


  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img 
        className='logo-imagen'
        src={logo}
        alt= 'Logo de empresa'
        />
      </div>

      <div className='contenedor-contador'>
        <Contador numClick={numClick} 
        
        />
        
        <Boton 
          texto = 'Incrementar'
          esBotonContador = {true}
          manejarClick = {incrementarContador}
        />
        <Boton 
          texto = 'Reiniciar'
          esBotonContador = {false}
          manejarClick = {reiniciarContador}
        />

      </div>
    </div>
  );
}

export default App;
