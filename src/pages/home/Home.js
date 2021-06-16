import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../App";

function Home() {
    const {language} = useContext(LanguageContext);

    return (
        <div className="page-container">
            <h2>{content.nl.home.title}</h2>
            <p>{content.nl.home.introText}</p>
        </div>
    );
}

export default Home;
