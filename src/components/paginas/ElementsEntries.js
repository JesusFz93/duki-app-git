import React from 'react'
import { useSelector } from 'react-redux';
import { ElementsEntry } from './ElementsEntry'


export const ElementsEntries = () => {

    const { notes } = useSelector( state => state.elred );




    return (
        <>
            {
                
                notes.map( note => (
                    <ElementsEntry 
                        key={ note.id }
                        { ...note }
                    />
                ))
            }
        </>
    )
}
