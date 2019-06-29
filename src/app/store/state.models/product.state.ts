import { SampleState } from './sample.stateModel';
import { initialState, sampleReducer } from '../reducers/sample.reducer';
import { ActionReducerMap} from '@ngrx/store';

export interface ProductStateInterface{
    sampleState : SampleState;
}

export const ProductState : ProductStateInterface={
    sampleState : initialState
}

export const productReducer : ActionReducerMap<ProductStateInterface> ={
    //sampleReducer : sampleReducer
    sampleState : sampleReducer
}