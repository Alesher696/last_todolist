import {ActionType, AppDispatch} from "./store";
import {Dispatch} from "redux";
import {TodolistAPI, TodolistType} from "../api/todolist-api";
import {getTasksTC} from "./tasksReducer";




export type initialStateTodolistType = TodolistType & { filter: string }

const initialState: initialStateTodolistType[] = [
    // {id: todolistId1, title: "What to learn", filter: 'all'},
    // {id: todolistId2, title: "What to buy", filter: 'all'}
]


export const todolistReducer = (state: initialStateTodolistType[] = initialState, action: ActionType): initialStateTodolistType[] => {
    switch (action.type) {
        case "GET-TODOS":
            return action.payload.todos.map((el) => ({...el, filter: 'all'}))
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.todolistId)
        case 'ADD-TODOLIST':
            const newTodo = {...action.todolist, filter: 'all'}
            return [newTodo, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return [...state.map(el => el.id === action.id ? {...el, title: action.title} : el)]
        case 'CHANGE-TODOLIST-FILTER':
            return [...state.map(el => el.id === action.id ? {...el, filter: action.newFilter} : el)]
        default:
            return state
    }
}
export type RemoveTodolistACType = ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', todolistId: todolistId} as const
}

export type AddTodolistACType = ReturnType<typeof AddTodolistAC>
export const AddTodolistAC = (todolist: TodolistType) => {
    return {type: 'ADD-TODOLIST', todolist} as const
}

export type ChangeTodolistTitleACType = ReturnType<typeof ChangeTodolistTitleAC>
export const ChangeTodolistTitleAC = (todolistId: string, title: string) => {
    return {type: 'CHANGE-TODOLIST-TITLE', title: title, id: todolistId} as const
}

export type ChangeTodolistFilterACType = ReturnType<typeof ChangeTodolistFilterAC>
export const ChangeTodolistFilterAC = (todolistId: string, newFilter: string) => {
    return {type: 'CHANGE-TODOLIST-FILTER', newFilter: newFilter, id: todolistId} as const
}

export type getTodolistsACType = ReturnType<typeof getTodoListsAC>
const getTodoListsAC = (todos: TodolistType[]) => {
    return {type: "GET-TODOS", payload: {todos}} as const
}

export const GetTodolistTC = () => async (dispatch: AppDispatch) => {
    try {
        const result = await TodolistAPI.getTodolist()
        dispatch(getTodoListsAC(result.data))
        result.data.map(el => {
            return (dispatch(getTasksTC(el.id)))
        })
    } catch (e) {
        console.log(e)
    }
}

export const AddTodolistTC = (title: string) => async (dispatch: Dispatch) => {
    try {
        const result = await TodolistAPI.addTodolist(title)
        dispatch(AddTodolistAC(result.data.data.item))
    } catch (e) {
        console.log(e)
    }
}

export const DeleteTodolistTC = (todolistId: string) => async (dispatch: Dispatch) => {
    try{
        const result = await TodolistAPI.deleteTodolist(todolistId)
        dispatch(RemoveTodolistAC(todolistId))
    }
    catch (e){
        console.log(e)
    }
}