import React from 'react';
import * as Styled from './style';



function Header (){

    return (

    <Styled.Container>

            <Styled.Menu>
                <a href = ".">INICIO</a>
                    <span className="barra" />
                <a href = ".">TAREFA</a>
            </Styled.Menu>


    </Styled.Container>

    )

}


export default Header;