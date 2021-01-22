import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SimpleFormScreen } from '../components/forms/SimpleFormScreen';
import { InicioScreen } from '../components/inicio/InicioScreen';

import { Principal } from '../components/journal/PrincipalScreen';
import { SegundaScreen } from '../components/journal/SegundaScreen';
import { HallaScreen } from '../components/paginas/HallaScreen';
import { SimpleTextScreen } from '../components/text/SimpleTextScreen';
import { Navbar } from '../ui/navbar/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/inicio" component={ InicioScreen } />
                    <Route exact path="/principal" component={ Principal } />
                    <Route exact path="/secundaria" component={ SegundaScreen } />
                    <Route exact path="/form/simpleform" component={ SimpleFormScreen } />
                    <Route exact path="/text/simpletext" component={ SimpleTextScreen } />
                    <Route exact path="/text/hallascreen" component={ HallaScreen } />

                    <Redirect to="/inicio" />
                </Switch>
            </div>


        </>
    )
}
