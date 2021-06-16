import React, {createContext, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import AllPlants from './pages/allPlants/AllPlants';
import {useCleanState} from "./helpers/customHooks";

export const LanguageContext = createContext({});

function App() {
    const language = useCleanState("nl");

    return (
        <LanguageContext.Provider
            value= {{ language }}
        >
            <Router>
                <Header/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about-us">
                        <AboutUs/>
                    </Route>
                    <Route path="/all-plants">
                        <AllPlants/>
                    </Route>
                </Switch>
            </Router>
        </LanguageContext.Provider>
    );
}

export default App;
