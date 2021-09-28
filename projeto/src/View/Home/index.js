import React, { useState } from 'react';
import * as Styled from './style';

/* IMAGENS */
import Imagem from '../../Imgs/filter.png';
import futebol from '../../Imgs/futebol.jpg';
import viagem from '../../Imgs/viagem.png';
import cinema from '../../Imgs/cinema.png';
import lanche from '../../Imgs/lanche.jpg';
import prova from '../../Imgs/prova.jpg';
import academia from '../../Imgs/academia.jpg';
import compra from '../../Imgs/compra.jpg';
import trabalho from '../../Imgs/trabalho.png';

/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';



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

      <Styled.ContainerCard>
          <TaskCard Img={futebol} title="Futebol"/>
          <TaskCard Img={viagem} title="Viagem"/>
          <TaskCard Img={academia} title="academia"/>
          <TaskCard Img={lanche} title="Lanche"/>
          <TaskCard Img={prova} title="Prova"/>
          <TaskCard Img={trabalho} title="Trabalho"/>
          <TaskCard Img={cinema} title="Cinema"/>
          <TaskCard Img={compra} title="Compra"/>
      </Styled.ContainerCard>

      <Footer /> 
    </Styled.Container>

  )


}

/* RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;


