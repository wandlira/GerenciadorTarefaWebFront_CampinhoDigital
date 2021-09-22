import React from 'react';
import * as Styled from './style';





function Filter (props) {
return(

<Styled.Container activation = {props.actived}>
    <img src={props.Img} alt="FILTRO"/>
    <span>{props.title}</span>
</Styled.Container>

)

}


export default Filter;