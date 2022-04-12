import React from 'react'
import About from '../components/About'
import { Education } from '../components/Education'
import styled from 'styled-components'
import { Experiencia } from '../components/Experiencia'
import { Certificacion } from '../components/Certificaciones'




const App = () => {

    const GlobalStyle = styled.div`
    body{
        font-family: 'Lato', sans-serif;
        margin: 0;
        padding: 0;
        background: #F5F5F5;
    }
    
`;
    return (
        <GlobalStyle>
            <About/>
            <Education/>
            <Experiencia />
            <Certificacion/>
        </GlobalStyle>
    )
}

export default App