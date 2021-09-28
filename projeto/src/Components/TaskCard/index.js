import React from 'react';
import * as Styled from './style';

function TaskCard (props) {

return(

<Styled.Container>
    <Styled.TopCard>
        <img src ={props.Img} alt="tarefa"></img>
        <h3>{props.title}</h3>
    </Styled.TopCard>
    <Styled.BottomCard>
        <strong>16/09/2021</strong>
        <span>10:00</span>

    </Styled.BottomCard>
</Styled.Container>

)

}


export default TaskCard;