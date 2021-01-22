

import { db } from '../firebase/firebase-config';

export const loadElementsHelper = async ( uid ) => {

    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    const elements = [];

    notesSnap.forEach( snapHijo => {
        elements.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    
    return elements;
}



