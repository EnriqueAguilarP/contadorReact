import logo from './imagenes/logo.png';
import './App.css';
import Boton from './componentes/boton';
import Contador from './componentes/contador';

function App() {
  const incrementarContador = () => {
    console.log('Incrementó');
  }

  const reiniciarContador = () => {
    console.log('Reinició');
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
        <Contador numClick='2' 
        
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
