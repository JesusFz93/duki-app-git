import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'



export const SimpleFormScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: ''
    });

    const {name, email} = formValues;

    const [optionState, setOptionState] = useState("");

    useEffect(() => {
    }, [email])

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`${name} ${email} ${optionState}`);
    }

    const handleOptionChange = (e) => {
        const selectedOption = e.target.value;
        setOptionState(selectedOption);
    }

    return (
        <>
            <h1>Simple form</h1>
            <hr />
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Pon tu nombre"
                            autoComplete="off"
                            value={name}
                            onChange={handleInputChange}
                        />

                        <input 
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="algo@email.com"
                            autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                        />

                        <select className="custom-select" onChange={handleOptionChange} >
                            <option value="altas">Altas</option>
                            <option value="dispersion">Dispersion</option>
                            <option value="reposicion">Reposicion</option>
                            <option value="adicionales">Adicionales</option>
                        </select>

                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Example file input</label>
                            <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                        </div>







                        
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Enviar
                        </button>
                    </form>
                </div>

                <div className="col-6">
                    <label>Nombre: {name}</label><br />
                    <label>Email: {email}</label><br />
                    <label>Opcion: {optionState}</label>
                    
                </div>
            </div>
        </>
    )
}
