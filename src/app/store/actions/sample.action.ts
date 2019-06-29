import { Action } from '@ngrx/store';

export enum actions{
    CHANGE_MESSAGE = '[MESSAGE] CHANGE_MESSAGE'
}

export class changeMessage implements Action{
    readonly type=actions.CHANGE_MESSAGE;
    
    constructor( public payload : string){
       
    }
}

export type actionTypes= changeMessage;