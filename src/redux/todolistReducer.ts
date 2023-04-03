import {v1} from "uuid";


export type initialStateTodolistType = {
    id: string
    title: string
    filter: string
}

type ActionType= ChangeTodolistFilterACType | RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType

export const todolistId1 = v1();
export const todolistId2 = v1();

const initialState = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
]


export const todolistReducer = (state: initialStateTodolistType[] = initialState, action: ActionType): initialStateTodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state
        case 'ADD-TODOLIST':
            return state
        case 'CHANGE-TODOLIST-TITLE': {
            return state
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return [...state.map(el=> el.id === action.id ? {...el, filter: action.Newfilter} : el)]
        }
        default:
            return state
    }
}
export type RemoveTodolistACType= ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', id: todolistId} as const
}

export type AddTodolistACType= ReturnType<typeof AddTodolistAC>
export const AddTodolistAC = (title: string) => {
    return {type: 'ADD-TODOLIST', title: title} as const
}

export type ChangeTodolistTitleACType= ReturnType<typeof ChangeTodolistTitleAC>
export const ChangeTodolistTitleAC = (todolistId: string, title: string) => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId} as const
}

export type ChangeTodolistFilterACType= ReturnType<typeof ChangeTodolistFilterAC>
export const ChangeTodolistFilterAC = (todolistId: string, Newfilter: string) => {
    return {type: 'CHANGE-TODOLIST-FILTER',
        Newfilter: Newfilter,
        id: todolistId} as const
}
