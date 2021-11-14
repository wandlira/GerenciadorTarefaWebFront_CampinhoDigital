import React from 'react';
import * as Styled from './style';
import { Link } from 'react-router-dom';



function Header (){

    return (

    <Styled.Container>

            <Styled.Menu>
                <Link to= "/">INICIO</Link>
                    <span className="barra" />
                <Link to="/task">TAREFA</Link>
            </Styled.Menu>


    </Styled.Container>

    )

}


export default Header;