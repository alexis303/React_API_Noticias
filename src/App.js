import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  // definir categoria y noticias 

  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=a12bde1191904d21a04b2d6212208634`
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles)
    }
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>

      <Header
        titulo='Buscador de Noticias'
      />

      <div className="container white">
        <Formulario 
          guardarCategoria = {guardarCategoria}
        />
        <ListadoNoticias 
          noticias = {noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
