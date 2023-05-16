import {ActionsType} from "./store";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type appActionsType = ReturnType<typeof setStatusAC> | ReturnType<typeof setErrorAC>

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR' :
            return {...state, error: action.error}
        default:
            return state
    }
}

export const setStatusAC = (status: RequestStatusType)=>{
    return{
        type:'APP/SET-STATUS',
        status
    }as const
}
export const setErrorAC = (error: string | null)=>{
    return{
        type: 'APP/SET-ERROR',
        error
    }as const
}