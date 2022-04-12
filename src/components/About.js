import React from "react";
import { AboutAvatar, AboutH2, AboutImg, AboutLocation, AboutName, AboutProfession, AboutStyle} from '../styles/AboutStyled'
import  '../styles/About.css'


        const About = () => {
            return (
                <AboutStyle>
                    <div className="About-Container">
                        <AboutAvatar>
                            <figure>
                                <AboutImg src="/" alt="Imagen" />
                            </figure>
                        </AboutAvatar>
                        <AboutName>
                            <AboutH2>Angie Gordillo</AboutH2>
                        </AboutName>
                        <AboutProfession>
                            <p>Estudiante Academia Geek</p>
                        </AboutProfession>
                        <AboutLocation>
                            <p>Bogotá, Colombia</p>
                        </AboutLocation>
                        <div className="About-social">
                            <p>Redes sociales</p>
                        </div>
                    </div>
                </AboutStyle>
            )
        }


export default About