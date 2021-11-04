import {format} from 'date-fns';
import React, {useMemo} from 'react';

import * as Styled from './style';

import arrayIcons from '../../utils/icons';



function TaskCard (props) {

    const date = useMemo(() => format(new Date(props.when), 'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(props.when), 'HH/mm'));
    

return (
<Styled.Container>
    <Styled.TopCard>
        <img src={arrayIcons[props.type]} alt="tarefa"></img>
        <h3>{props.title}</h3>
    </Styled.TopCard>
    <Styled.BottomCard>
        <strong>{date}</strong>
        <span>{hour}</span>

    </Styled.BottomCard>
</Styled.Container>

)

}


export default TaskCard;