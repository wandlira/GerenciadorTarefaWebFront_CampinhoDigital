import React, { useState } from 'react';
import * as Styled from './style';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import Imagem from '../../Imgs/filter.png';



function Home() {

  const [filterActive, functionFilter] = useState();


  return (

    <Styled.Container>
      <Header />
      <Styled.ContainerFilter>
        <button type='button' onClick={() => functionFilter('todos')}>
          <Filter title='Todos' Img={Imagem} actived={filterActive === 'todos'} />
        </button>

        <button type='button' onClick={() => functionFilter('hoje')}>
          <Filter title='Hoje' Img={Imagem} actived={filterActive === 'hoje'} />
        </button>

        <button type='button' onClick={() => functionFilter('semana')}>
          <Filter title='Semana' Img={Imagem} actived={filterActive === 'semana'} />
        </button>

        <button type='button' onClick={() => functionFilter('mês')}>
          <Filter title='Mês' Img={Imagem} actived={filterActive === 'mês'} />
        </button>
      </Styled.ContainerFilter>
      <Footer />
    </Styled.Container>

  )


}

/* RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;


