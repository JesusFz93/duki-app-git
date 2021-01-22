import { types } from '../types/types';

const initialState = {
    notes: [],
    active: null
}


export const fireBaseReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case  types.notesAddNew:
            return {
                ...state,
                notes: [ action.payload, ...state.notes ]
            }

        case types.hallaLoadInfo:
            return {
                ...state,
                notes: [ ...action.payload ]
            }
    
        default:
            return state
    }


}