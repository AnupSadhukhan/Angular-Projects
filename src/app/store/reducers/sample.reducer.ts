import { SampleState } from '../state.models/sample.stateModel';
import * as sampleAction from '../actions/sample.action'; 

export const initialState : SampleState={
    message : null
}

export function sampleReducer(state: SampleState =initialState, action : sampleAction.actionTypes){
    switch(action.type){
        case sampleAction.actions.CHANGE_MESSAGE : {
            return {
                ...state,
                message : action.payload
                
            }
        }
      
    }
    return state;
}