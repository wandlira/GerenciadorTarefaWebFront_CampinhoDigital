import React from 'react';
import * as Styled from './style';
import Img from '../../Imgs/filter.png';



function Filter ({title}) {
return(

<Styled.Container>
    <img src={Img} alt="FILTRO"/>
    <span>{title}</span>
</Styled.Container>

)

}


export default Filter;