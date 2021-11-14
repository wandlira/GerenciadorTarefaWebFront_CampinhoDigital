import React, { useState, useEffect } from 'react';
import * as Styled from './style';
import api from '../../Services/api';


/* IMAGENS */
import Imagem from '../../Imgs/filter.png';


/* COMPONENTES */
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import Filter from '../../Components/Filter';
import TaskCard from '../../Components/TaskCard';
import iconUtils from '../../utils/icons';



function Task() {


  const [type, setType] = useState();
  const [done, setDone] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [hour, setHour] = useState();
  const [macadress, setMacadress] = useState('11:11:11:11:11:11');

  async function save(){
    await api.post('/task', {
      macadress,
      type,
      title,
      description,
      when: `${date}T${hour}:00.000`

    }).then(() => alert('A TAREFA FOI CADASTRADA COM SUCESSO'))
  }

  return (

    <Styled.Container>
      <Header />

      <Styled.Form>
        <Styled.Icons>
          {
            iconUtils.map((icon, index) => (
              index > 0 &&
              <button type="button" onClick={() => setType(index)}>
                <img src={icon} alt="Tarefa" className={type && type != index && 'off'} />
              </button>
            ))
          }
        </Styled.Icons>

        <Styled.Input>
          <input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} value={title}></input>
        </Styled.Input>

        <Styled.TextArea>
          <input type="textarea" placeholder="Descrição" onChange={e => setDescription(e.target.value)} value={description} ></input>
        </Styled.TextArea>

        <Styled.Input>
          <input type="date" onChange={e => setDate(e.target.value)} value={date} ></input>
        </Styled.Input>

        <Styled.Input>
          <input type="time" onChange={e => setHour(e.target.value)} value={hour} ></input>
        </Styled.Input>

        <Styled.Option>
          <div>
              <input type="checkbox" check={done} onChange={e => setDone(e.target.value)}></input>
              <span>CONCLUÍDO</span>
          </div>
        </Styled.Option>

        <Styled.Save>
          <button type="button" onClick={save}>SALVAR</button>
        </Styled.Save>


      </Styled.Form>


      <Footer />
    </Styled.Container>

  )


}

/* RESPONSÁVEL POR EXPORTAR A FUNÇÃO PARA OUTRAS ÁREA DO CÓDIGO */
export default Task;



