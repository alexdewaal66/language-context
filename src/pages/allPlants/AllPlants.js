import React, {useContext} from 'react';
import content from '../../data/content.json';
import {LanguageContext} from "../../App";

function AllPlants() {
    const {language} = useContext(LanguageContext);

    return (
    <div className="page-container">
      <h2>{content[language.get].plants.title}</h2>
      <p>{content[language.get].plants.text}</p>
      <ul>
        {content[language.get].plants.plants.map((plant) => <li>{plant}</li>)}
      </ul>
    </div>
  );
}

export default AllPlants;
