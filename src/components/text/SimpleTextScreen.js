import React from 'react'
import {useForm} from 'react-hook-form';

export const SimpleTextScreen = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        const {text,check,gender,textArea, fileUpload, multiSelect, range, drivers} = values;

        console.log(text,check,gender,textArea, fileUpload[0].name, multiSelect.toString(), range, drivers);

        /*console.log(drivers);*/
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" ref={register} name="text" autoComplete="off" />
                </div> 
                
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" ref={register} name="check" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>

                <div className="form-group">
                    <select name="gender" ref={register} className="form-control">
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={register} name="textArea"></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" ref={register} name="fileUpload" />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2" ref={register} name="multiSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="formControlRange">Example Range input</label>
                    <input type="range" className="form-control-range" id="formControlRange" ref={register} name="range" />
                </div>



                <div className="form-check">
                    <input className="form-check-input" type="radio" name="drivers" id="exampleRadios1" value="option1"  ref={register} />
                    <label className="form-check-label" htmlFor="exampleRadios1">
                        Default radio
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="drivers" id="exampleRadios2" value="option2" ref={register} />
                    <label className="form-check-label" htmlFor="exampleRadios2">
                        Second default radio
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="drivers" id="exampleRadios3" value="option3"  ref={register} />
                    <label className="form-check-label" htmlFor="exampleRadios3">
                        Disabled radio
                    </label>
                </div>




                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

/*
<div className="form-group">

</div>
 */

/*import React from 'react'
import { useForm } from '../../hooks/useForm'



export const SimpleTextScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        password1: '',
        check: false
    });
    
    const {name, password1, check} = formValues;
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        console.log(`${name} ${password1} ${check} `);
    }

    const onChanges= (e) => {
        console.log(check);
    }
    
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <div classNameName="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="text" classNameName="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleInputChange} 
                            value={name} name='name' />
                </div>
                <div classNameName="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" classNameName="form-control" id="exampleInputPassword1" onChange={handleInputChange} 
                            value={password1} name='password1' />
                </div>
                <div classNameName="form-group form-check">
                    <input type="checkbox" classNameName="form-check-input" id="exampleCheck1" onChange={onChanges} value={check} name='check' />
                    <label classNameName="form-check-label" htmlFor="exampleCheck1" >Check me out</label>
                </div>
                <button type="submit" classNameName="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
*/