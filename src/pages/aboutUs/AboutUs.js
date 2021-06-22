import React, {useContext} from 'react';
import writers from '../../assets/bob_betsy.jpg';
import content from '../../data/content.json';
import {LanguageContext} from "../../App";


function AboutUs() {
    const {language} = useContext(LanguageContext);

    return (
        <div className="page-container">
            <h2>{content[language.get].aboutUs.title}</h2>
            <p>Dit is je profielpagina!</p>
            <img src={writers} alt="Bob & Betsy"/>
            <p>{content[language.get].aboutUs.writers}</p>
        </div>
    );
}

export default AboutUs;
