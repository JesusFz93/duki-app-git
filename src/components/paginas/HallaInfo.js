import React from 'react'
import {useSelector} from 'react-redux'
import { HallaElement } from './HallaElement'

export const HallaInfo = () => {

    const {fbase} = useSelector(state => state.fbase)
    
    return (
        <div>
            {
                fbase.map(fbaseE => (
                    <HallaElement 
                    key = {fbaseE.id}
                    {...fbaseE}
                    />
                ))
            }
        </div>
    )
}
