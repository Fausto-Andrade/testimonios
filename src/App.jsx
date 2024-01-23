import './App.css';
import Testimonio from './componentes/Testimonio.jsx';

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre Academlo:</h1>
        <Testimonio 
          nombre = 'Alejandra Mayorga'
          pais = 'Colombia'
          imagen = 'aleja'
          cargo = 'Ingeniera de Desarrollo deSoftware'
          empresa = 'Mercado Libre'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
        <Testimonio 
          nombre = 'Shawn Wang'
          pais = 'Singapur'
          imagen = 'shawn'
          cargo = 'Ingeniera de Software'
          empresa = 'Amazon'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
        <Testimonio 
          nombre = 'Emma Bostian'
          pais = 'Suecia'
          imagen = 'emma'
          cargo = 'Ingeniera de Software'
          empresa = 'Facebook'
          testimonio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' />
      </div>
    </div>
  );
}

export default App;
