import './App.css';
import Listaasiganturas from './components/Asiganturas/Listaasiganturas';
import Listaestudiantes from './components/Estudiantes/Listaestudiantes';
import NavbarTop from './components/NavBar/NavbarTop';

import Listanotas from './components/Notas/Listanotas';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CrearAsignatura from './components/Asiganturas/Crearasignatura';


function App() {
  return (
    <div className="">
      <BrowserRouter>

        <Routes>
          <Route path='/student-edit/:student_id' element={
            <div>
              <NavbarTop />

            </div>

          }></Route>
          <Route path='/' element={<Navigate to={'/dashboard/1/1'} replace />}></Route>
          <Route path='/dashboard/:usuarioid/:claseid' element={
            <div>
              <NavbarTop />
              <Listaasiganturas />
              <Listaestudiantes />

            </div>
          } />
          <Route path='/dashboard/:usuarioid/:claseid/:asignaturaid' element={
            <div>
              <NavbarTop />
              <Listanotas />

            </div>
          } />
          <Route path='/dashboard/:usuarioid/:claseid/crearasignatura' element={
            <div>
              <NavbarTop />
              <CrearAsignatura />

            </div>

          } />

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;
