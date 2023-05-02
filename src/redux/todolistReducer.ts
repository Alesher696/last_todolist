import {v1} from "uuid";
import {ActionType} from "./store";



export type FilterType = 'all' | 'active' | 'completed'

export type initialStateTodolistType = {
    id: string
    title: string
    filter: string
}



export const todolistId1 = v1();
export const todolistId2 = v1();

const initialState = [
    {id: todolistId1, title: "What to learn", filter: 'all'},
    {id: todolistId2, title: "What to buy", filter: 'all'}
]


export const todolistReducer = (state: initialStateTodolistType[] = initialState, action: ActionType): initialStateTodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el=> el.id !== action.todolistId)
        case 'ADD-TODOLIST':
            const newTodo = {id:action.todoListId, title:action.title, filter:'all'}
            return [...state, newTodo]
        case 'CHANGE-TODOLIST-TITLE': {
            return [...state.map(el=> el.id === action.id ? {...el, title:action.title}:el)]
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return [...state.map(el=> el.id === action.id ? {...el, filter: action.newFilter} : el)]
        }
        default:
            return state
    }
}
export type RemoveTodolistACType= ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', todolistId: todolistId} as const
}

export type AddTodolistACType= ReturnType<typeof AddTodolistAC>
export const AddTodolistAC = (title: string) => {
    return {type: 'ADD-TODOLIST', title: title, todoListId: v1()} as const
}

export type ChangeTodolistTitleACType= ReturnType<typeof ChangeTodolistTitleAC>
export const ChangeTodolistTitleAC = (todolistId: string, title: string) => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId} as const
}

export type ChangeTodolistFilterACType= ReturnType<typeof ChangeTodolistFilterAC>
export const ChangeTodolistFilterAC = (todolistId: string, newFilter: string) => {
    return {type: 'CHANGE-TODOLIST-FILTER',
        newFilter: newFilter,
        id: todolistId} as const
}
