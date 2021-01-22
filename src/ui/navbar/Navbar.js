import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom';
//import { AuthContext } from '../../auth/AuthContext';
//import { types } from '../../types/types';

import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.auth);

    const history = useHistory();
    

    const handleLogout = () => {
        
        history.replace('/login');

        dispatch( startLogout() )
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/principal"
                    >
                        page1
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/secundaria"
                    >
                        page2
                    </NavLink>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false">Componentes</a>
                        <div className="dropdown-menu">
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/form/simpleform">Simple form</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/text/simpletext">Simple text</NavLink>
                        <NavLink activeClassName="active" className="dropdown-item" exact to="/text/hallascreen">Halla Form</NavLink>
                        </div>
                    </li>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                    {name}
                    </span>

                    <button 
                        className="btn btn-success"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
