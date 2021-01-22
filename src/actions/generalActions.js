import { types } from '../types/types';
import { loadElementsHelper } from '../helpers/loadElementsHelper';
import { db } from '../firebase/firebase-config';


export const startLoadingElements = ( uid ) => {
    return async( dispatch, getState ) => {

        
        const { uid } = getState().auth;
        
        const notes = await loadElementsHelper( uid );
        dispatch( setElements( notes ) );

    }
}


export const setElements = ( elements ) => ({
    type: types.pageLoadElements,
    payload: elements
});



export const startNewElements = ( param1, param2 ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newNote = {
            nombre: param1,
            edad: param2,
            date: new Date().getTime()
        }

        try {
            const doc = await db.collection(`${ uid }/journal/notes`).add( newNote );
    
            dispatch( addNewElements( doc.id, newNote ) );
            
        } catch (error) {
            console.log(error);
        }


    }
}

export const addNewElements = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const startDeletingElements = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/journal/notes/${ id }`).delete();

        dispatch( deleteElement(id) );

    }
}

export const deleteElement = (id) => ({
    type: types.pageDeleteElements,
    payload: id
});