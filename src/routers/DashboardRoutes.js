import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Principal } from '../components/journal/PrincipalScreen';
import { SegundaScreen } from '../components/journal/SegundaScreen';
import { Navbar } from '../ui/navbar/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/principal" component={ Principal } />
                    <Route exact path="/secundaria" component={ SegundaScreen } />

                    <Redirect to="/principal" />
                </Switch>
            </div>


        </>
    )
}
