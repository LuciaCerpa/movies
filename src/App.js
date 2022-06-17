import {Routes, Route} from 'react-router-dom';
import Login from './componentes/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Listado from './componentes/Listado';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import MovieDetail from './componentes/MovieDetail';
import Resultados from './componentes/Resultados';

function App() {
 
  return (
    <div className="container mt-3">
      
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/listado" element={<Listado/>}/>
        <Route path="/pelis/id" element={<MovieDetail/>}/>
        <Route path="/results" element={<Resultados/>}/>
      </Routes>   
      <Footer/>   
    </div>
  );
}

export default App;
