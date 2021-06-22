import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import headerImage from '../../assets/wall-with-plants.jpg';
import {ReactComponent as FlagNL} from '../../assets/netherlands.svg';
import {ReactComponent as FlagES} from "../../assets/spain.svg";
import content from '../../data/content.json';
import './Header.css';
import {LanguageContext} from "../../App";

function Header() {
    const {language} = useContext(LanguageContext);

    function switchLanguage() {
        language.set(language.get === "nl" ? "es" : "nl");
    }

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink exact to="/about-us">
                                {content[language.get].header.menuItems.aboutUs}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/all-plants">
                                {content[language.get].header.menuItems.allPlants}
                            </NavLink>
                        </li>
                        <li className="language-switch" onClick={switchLanguage}>
                            <p>{content[language.get].header.changeTo}</p>
                            {language.get === "es" && <FlagNL/>}
                            {language.get === "nl" && <FlagES/>}
                        </li>
                    </ul>
                </nav>
                <div className="image-container">
                    <img src={headerImage} alt="Header plants" className="header-image"/>
                    <h1>{content[language.get].header.title}</h1>
                </div>

            </header>
        </>
    );
}

export default Header;
