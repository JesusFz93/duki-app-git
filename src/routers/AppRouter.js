import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';

//import { JournalScreen } from '../components/journal/JournalScreen';
import { login } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
//import { DashboardRoutes } from './DashboardRoutes';

import {startLoadingElements} from '../actions/generalActions';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);



    useEffect(() => {
        
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login( user.uid, user.displayName ) );
                setIsLoggedIn( true );
                dispatch( startLoadingElements( user.uid ) );
            } else {
                setIsLoggedIn( false );
            }

            setChecking(false);

        });
        
    }, [ dispatch, setChecking, setIsLoggedIn ])


    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        path="/auth/login"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ DashboardRoutes }
                    />


                </Switch>
            </div>
        </Router>
    )
}
