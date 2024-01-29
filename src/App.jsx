import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import Alerta from './components/Alerta';
import Buscador from './components/Buscador';
import BaseColaboradores from './assets/baseColaboradores';
import './App.css';

function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  const [error, setError] = useState({
    error: false,
    msg: '',
    color: ''
  });

  return (
    <>
      <header className='encabezado'>
        <h1>Lista de colaboradores</h1>
      </header>
      <article className='d-grid gap-2'>
        <Buscador data={data} dataFilter={setDataFilter} />
      </article>
      <main className='principal'>
        <Lista className='lista'
          data={data} setData={setData} dataFilter={dataFilter} setDataFilter={setDataFilter}
        />
        <section className='formulario'>
          <Formulario error={error} setError={setError} setData={setData} setDataFilter={setDataFilter} />
          <Alerta error={error} />
        </section>
      </main>
    </>
  );
}

export default App;
