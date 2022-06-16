import logo from './imagenes/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
        className='logo-imagen'
        src={logo}
        alt= 'Logo de empresa'
        />
      </div>

      <div className='contenedor-contador'>
        

      </div>
    </div>
  );
}

export default App;
