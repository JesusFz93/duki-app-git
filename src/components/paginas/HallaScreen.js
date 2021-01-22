import React from 'react'
import {useForm} from 'react-hook-form';

import { useDispatch } from 'react-redux'
import { ElementsEntries } from './ElementsEntries';
import { startNewElements, startLoadingElements, startDeletingElements } from '../../actions/generalActions';
// import { BasicTable } from '../table/BasicTable';

export const HallaScreen = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();
    
    const clearElements = () => { 
        document.getElementById("formulario").reset();
        document.getElementById("nombre").focus();
      }

    const onSubmit = (values) => {
        const { nombre, edad} = values;
        dispatch( startNewElements( nombre, edad ) );
        dispatch( startLoadingElements() );
        
        clearElements();
        
    }

    const deleteElements = (values) => {
        const {idElement} = values;
        dispatch( startDeletingElements( idElement ) );
        
        dispatch( startLoadingElements() );
        
        clearElements();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} id="formulario">

                <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input type="text" className="form-control" id="idElement" ref={register} name="idElement" autoComplete="off"  />
                </div> 
                
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" id="nombre" ref={register} name="nombre" autoComplete="off"  />
                </div> 
                
                <div className="form-group">
                    <label htmlFor="edad">Edad</label>
                    <input type="text" className="form-control" id="edad" ref={register} name="edad" autoComplete="off"  />
                </div> 
                




                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <button type="button" onClick={clearElements} className="btn btn-primary">limpiar</button>
            <button type="button" onClick={handleSubmit(deleteElements)} className="btn btn-danger">eliminar</button>

            <br/><br/>
            {/* <BasicTable /> */}
            

            <ElementsEntries />

        </>
    )
}
