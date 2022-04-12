import React from 'react';
import {H2Styled} from '../styles/H2Styled'
import { ExperienciaContainer } from '../styles/ExperienciaStyled';

export const Experiencia  = () => {
    return (
        <div>
            <H2Styled name="Experiencia" />
            <ExperienciaContainer>
                <div className='Experiencia-item'>
                    <h1>Desarrollador Frontend</h1>
                    <p>Tecnologia en desarrollo de software</p>
                </div>
            </ExperienciaContainer>
        </div>
    )
}