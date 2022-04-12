import React from 'react';
import {H2Styled} from '../styles/H2Styled'
import { HabilidadContainer} from '../styles/HabilidadStyled';

export const Habilidad = () =>{
    return (
        <div>
        <H2Styled name="Mis Estudios" />
        <HabilidadContainer>
            <div className='Education-item'>
                <h1>Pascual Bravo - <span>2020</span></h1>
                <p>Tecnologia en desarrollo de software</p>
            </div>
            <div className='Education-item'>
                <h1>Estudio2 - <span>2020</span></h1>
                <p>Carrera2</p>
            </div>
        </HabilidadContainer>
    </div>
    )
}