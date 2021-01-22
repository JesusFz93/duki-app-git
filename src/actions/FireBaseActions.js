import Swal from 'sweetalert2';

import { db } from '../firebase/firebase-config';
import { types } from '../types/types';


export const startNewSubmit = (workOrderB = '', folioB = '') => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;
        
        const newInfo = {
            workOrder: workOrderB,
            folio: folioB
        }

        try {
            const doc = await db.collection(`${ uid }/halla/folios`).add( newInfo );
    
            dispatch( addNewNote( doc.id, newInfo ) );
            Swal.fire('Saved', newInfo.workOrder, 'success');
            
            
        } catch (error) {
            console.log(error);
        }


    }
}

export const addNewNote = ( id, note ) => ({
    type: types.hallaAddInfo,
    payload: {
        id, ...note
    }
});











export const startUploading = ( workOrderB = '', folioB = '' ) => {
    return async( dispatch, getState ) => {

        const newInfo = {
            workOrder: workOrderB,
            folio: folioB
        }

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        dispatch( startSaveNote( newInfo ) )
        

        //Swal.close();
    }
}



export const startSaveNote = ( newInfo ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        try {
            const doc = await db.collection(`${ uid }/halla/folios`).add( newInfo );
    
            dispatch( addNewNote( doc.id, newInfo ) );
            Swal.fire('Saved', newInfo.workOrder, 'success');
            
            
        } catch (error) {
            console.log(error);
        }



    }
}