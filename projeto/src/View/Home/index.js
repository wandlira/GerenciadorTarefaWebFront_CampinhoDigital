import React, {useState, useEffect} from 'react';
import * as Styled from './style';
import api from '../../Services/api';

import { Link } from 'react-router-dom';


/* IMAGENS */
import Imagem from '../../Imgs/filter.png';


/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';



function Home() {

  //VARIAVEL QUE ATUALIZA O VALOR DO FILTRO
  const [filterActive, functionFilter] = useState("all");


  //SETTASKS VAI SER A FUNÇÃO QUE ARMAZENA TAREFAS DO BANCO DE DADOS NA VARIÁVEL TASK
  const [tasks, setTasks] = useState([]);


  //FUNÇÃO RESPONSÁVEL POR FAZER REQUISIÇÕES PARA O BACKEND
  async function loadTask(){
    await api.get(`/task/filter/${filterActive}/11:11:11:11:11:11`)
    .then((response) => {
      setTasks(response.data);
    })
  }

  useEffect(() => {
    loadTask();
  }, [filterActive])


  return (

    <Styled.Container>
      <Header />
      <Styled.ContainerFilter>
        <button type='button' onClick={() => functionFilter('all')}>
          <Filter title='Todos' Img={Imagem} actived={filterActive === 'all'} />
        </button>

        <button type='button' onClick={() => functionFilter('today')}>
          <Filter title='Hoje' Img={Imagem} actived={filterActive === 'today'} />
        </button>

        <button type='button' onClick={() => functionFilter('week')}>
          <Filter title='Semana' Img={Imagem} actived={filterActive === 'week'} />
        </button>

        <button type='button' onClick={() => functionFilter('month')}>
          <Filter title='Mês' Img={Imagem} actived={filterActive === 'month'} />
        </button>
      </Styled.ContainerFilter>

      <Styled.ContainerCard>
         {
           tasks.map(t => (
            <Link to={`/task/${t._id}`}>
            <TaskCard  type={t.type} title={t.title} when={t.when} />
            </Link>
           ))
         }
      </Styled.ContainerCard>

      <Footer /> 
    </Styled.Container>

  )


}

/* RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Home;



