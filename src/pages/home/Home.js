import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../App";

function Home() {
    const {language} = useContext(LanguageContext);

    return (
        <div className="page-container">
            <h2>{content[language.get].home.title}</h2>
            <p>{content[language.get].home.introText}</p>
        </div>
    );
}

export default Home;
