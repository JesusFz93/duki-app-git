import React from 'react'

export const ElementsEntry = ({id, nombre, edad }) => {
    return (
        <>
            <ul>
                <li>{id} - {nombre} - {edad}</li>
            </ul>
        </>
    )
}
