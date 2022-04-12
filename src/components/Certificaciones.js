import React from 'react';
import {H2Styled} from '../styles/H2Styled'
import { CertificacionContainer } from '../styles/CertificacionStyled';

export const Certificacion = ()=>{
    return (
        <div>
        <H2Styled name="Certificacion" />
        <CertificacionContainer>
            <div className='Certificacion-item'>
                <h1>FreeCodeCamp</h1>
                <p>Desing Responsive</p>
            </div>
        </CertificacionContainer>
    </div>
    )
}