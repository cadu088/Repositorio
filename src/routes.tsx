import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home'
import Hub from './pages/Hub';
import Contacts from './pages/Contacts';
import Projects from './pages/Projects';
import Languagens from './pages/languages'

const Routes = () => {
    return(
        <BrowserRouter>
                   <Route component = { Home }  path="/" exact />
            <Route component = { Hub }  path="/hub" />
            <Route component = { Contacts }  path="/contato" />
            <Route component = { Projects }  path="/projetos" />
            <Route component = { Languagens }  path="/linguagens" />
        </BrowserRouter>
    )
};

export default Routes;